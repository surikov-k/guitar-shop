import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '@guitar-shop/shared-types';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
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
    return { sub, email, name, isAdmin };
  }
}
