import { Injectable } from '@nestjs/common';
import { Guitar } from '@guitar-shop/shared-types';
import { ShopItemRepository } from './shop-item.repository';
import { ShopItemEntity } from './shop-item.entity';
import { CreateShopItemDto, UpdateShopItemDto } from './dto';
import { ShopItemQuery } from './query';
import { ItemCommentRepository } from '../item-comment/item-comment.repository';
import { CreateCommentDto } from '../item-comment/dto';
import { ItemCommentEntity } from '../item-comment/item-comment.entity';

@Injectable()
export class ShopItemService {
  constructor(
    private readonly shopItemRepository: ShopItemRepository,
    private readonly commentRepository: ItemCommentRepository
  ) {}

  async create(dto: CreateShopItemDto): Promise<Guitar> {
    const entity = new ShopItemEntity({
      ...dto,
      comments: [],
      rating: 0
    });
    return this.shopItemRepository.create(entity);
  }

  async delete(id: number) {
    const item = await this.shopItemRepository.findById(id);
    const commentsIds = item.comments.map(({ id }) => id);
    await this.shopItemRepository.destroy(id);
    await this.commentRepository.destroyMany(commentsIds);
  }

  async get(id: number): Promise<Guitar> {
    return this.shopItemRepository.findById(id);
  }

  async getAll(query: ShopItemQuery): Promise<Guitar[]> {
    return this.shopItemRepository.find(query)
  }

  async getComments(id: number) {
    return this.commentRepository.findByItemId(id);
  }

  public async createComment(userId: number, shopItemId: number, dto: CreateCommentDto) {
    const entity = new ItemCommentEntity({ userId, shopItemId, ...dto });
    const comment = await this.commentRepository.create(entity);
    const rating = await this.calculateRating(shopItemId);
    await this.update(shopItemId, { rating });
    return comment;
  }

  async calculateRating(id): Promise<number> {
    const comments = await this.getComments(id);
    if (comments.length) {
      return comments.reduce((total: number, { rating }) => total + rating, 0) / comments.length;
    }
  }

  async update(id: number, dto: UpdateShopItemDto): Promise<Guitar> {
    const item = await this.shopItemRepository.findById(id);
    const entity = new ShopItemEntity({
      ...item,
      ...dto,
    })

    return this.shopItemRepository.update(id, entity);
  }
}
