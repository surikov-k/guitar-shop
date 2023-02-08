import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { User } from '@guitar-shop/shared-types';

@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get<string>('jwt.secret'),
    });
  }

  async validate({
    sub,
    email,
    name,
    isAdmin,
  }: Pick<User, 'email' | 'name' | 'isAdmin'> & { sub: number }) {
    if (!isAdmin) {
      return false;
    }
    return { sub, email, name, isAdmin };
  }
}
