import { User } from './user.interface';

export interface Comment {
  id?: number;
  author: User;
  advantages: string;
  disadvantages: string;
  text: string;
  rating: number;
  createdAt: Date;
}
