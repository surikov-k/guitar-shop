import { GuitarType } from './guitar-type.enum';
import { StringNumber } from './string-number.type';
import { Comment } from './comment.interface'
import { Prisma } from '@prisma/client';

export interface Guitar {
  id?: number;
  name: string;
  description: string;
  addedAt?: Date;
  photo: string;
  type: GuitarType;
  code: string;
  stringsNumber: StringNumber;
  price: Prisma.Decimal;
  comments: Comment[]
}
