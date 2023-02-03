import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ShopUserRepository } from '../shop-user/shop-user.repository';
import { LoginDto, RegisterDto } from './dto';
import { ShopUserEntity } from '../shop-user/shop-user.entity';
import { User } from '@guitar-shop/shared-types';

@Injectable()
export class AuthService {
  constructor(private readonly shopUserRepository: ShopUserRepository) {}

  async register(dto: RegisterDto) {
    const {email, name, password} = dto;
    const userData = { email, name, isAdmin: false, passwordHash: '' };

    const existedUser = await this.shopUserRepository.findByEmail(email);

    if (existedUser) {
      throw new Error('User exists')
    }

    const userEntity = await new ShopUserEntity(userData ).setPassword(password);
    return this.shopUserRepository.create(userEntity)
  }

  async verify(dto: LoginDto) {
    const {email, password} = dto;
    const user = await  this.shopUserRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Wrong email or password');
    }

    const entity = new ShopUserEntity(user);

    if (!await entity.comparePassword(password)) {
      throw new UnauthorizedException('Wrong email or password');
    }

    return entity.toObject();
  }

  async get(id) {
    const user =  await this.shopUserRepository.findById(id)
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async login(user: User) {
    return user;
  }
}
