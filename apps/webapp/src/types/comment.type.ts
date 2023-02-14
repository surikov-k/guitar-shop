import { Comment, User } from '@guitar-shop/shared-types';

export type CommentType = Omit<Comment, 'id' | 'createdAt' | 'userId'>
  & {
  id: number,
  createdAt: string,
  author: User
}
