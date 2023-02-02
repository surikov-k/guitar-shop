import { User } from '@guitar-shop/shared-types';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './shop-user.constants';

export class ShopUserEntity implements User {
  email: string;
  id: number;
  isAdmin: boolean;
  name: string;
  passwordHash: string;

  constructor(shopUser: User) {
    this.fillEntity(shopUser);
  }

  public toObject() {
    return { ...this }
  }

  public async setPassword(password: string): Promise<ShopUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }

  public fillEntity(shopUser: User) {
    this.email = shopUser.email;
    this.id = shopUser.id;
    this.isAdmin = shopUser.isAdmin;
    this.name = shopUser.name;
    this.passwordHash = shopUser.passwordHash;
  }
}
