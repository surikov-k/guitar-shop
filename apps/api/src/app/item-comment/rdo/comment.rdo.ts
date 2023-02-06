import { Expose } from 'class-transformer';

export class CommentRdo {
  @Expose()
  id: number;

  @Expose()
  userId: number;

  @Expose()
  shopItemId: number;

  @Expose()
  advantages: string;

  @Expose()
  disadvantages: string;

  @Expose()
  text: string;

  @Expose()
  rating: number;

  @Expose()
  createdAt: Date;

}
