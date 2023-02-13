import { Comment } from '@guitar-shop/shared-types';

export type CommentType = Omit<Comment, 'id' | 'createdAt'>
  & {
  id: number,
  createdAt: string
}
