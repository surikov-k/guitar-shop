import { User } from '@guitar-shop/shared-types';

export type JwtDecodeType = Pick<User, 'name' | 'email'| 'isAdmin'> & {sub: number}
