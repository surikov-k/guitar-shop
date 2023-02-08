import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ShopUserRepository } from '../shop-user/shop-user.repository';
import { LoginDto, RegisterDto } from './dto';
import { ShopUserEntity } from '../shop-user/shop-user.entity';
import { User } from '@guitar-shop/shared-types';
import { AuthError } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: ShopUserRepository,
    private readonly jwtService: JwtService
  ) {}

  async register(dto: RegisterDto) {
    const { email, name, password } = dto;
    const userData = { email, name, isAdmin: false, passwordHash: '' };

    const userEntity = await new ShopUserEntity(userData).setPassword(password);
    return this.userRepository.create(userEntity);
  }

  async verify(dto: LoginDto) {
    const { email, password } = dto;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException(AuthError.WRONG_CREDENTIALS);
    }

    const entity = new ShopUserEntity(user);

    if (!(await entity.comparePassword(password))) {
      throw new UnauthorizedException(AuthError.WRONG_CREDENTIALS);
    }

    return entity.toObject();
  }

  async get(id) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException(AuthError.NOT_FOUND);
    }
    return user;
  }

  async login(user: User) {
    const payload = {
      sub: user.id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
