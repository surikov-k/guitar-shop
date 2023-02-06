import { Entity } from '@guitar-shop/core';
import { Comment } from '@guitar-shop/shared-types';

export class ItemCommentEntity implements Entity<ItemCommentEntity>, Comment {
  public advantages: string;
  public createdAt: Date;
  public disadvantages: string;
  public id: number;
  public shopItemId: number;
  public rating: number;
  public text: string;
  public userId: number;

  constructor(comment: Comment) {
    this.fillEntity(comment)
  }

  fillEntity(comment: Comment) {
    this.advantages = comment.advantages;
    this.disadvantages = comment.disadvantages;
    this.id = comment.id;
    this.shopItemId = comment.shopItemId;
    this.rating = comment.rating;
    this.text = comment.text;
    this.userId = comment.userId;
  }

  toObject(): ItemCommentEntity {
    return { ...this };
  }
}
