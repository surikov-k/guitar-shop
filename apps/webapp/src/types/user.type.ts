import { User } from '@guitar-shop/shared-types';

export type UserType = Pick<User, 'name' | 'isAdmin'>
