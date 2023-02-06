import { GuitarType } from './guitar-type.enum';
import { StringNumber } from './string-number.type';
import { Comment } from './comment.interface'

export interface Guitar {
  id?: number;
  name: string;
  description: string;
  addedAt?: Date;
  photo: string;
  type: GuitarType;
  code: string;
  stringsNumber: StringNumber;
  price: number;
  comments: Comment[];
  rating: number;
}
