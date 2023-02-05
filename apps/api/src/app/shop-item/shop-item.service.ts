import { Injectable } from '@nestjs/common';

import { Guitar } from '@guitar-shop/shared-types';
import { ShopItemRepository } from './shop-item.repository';
import { ShopItemEntity } from './shop-item.entity';
import { CreateShopItemDto, UpdateShopItemDto } from './dto';
import { ShopItemQuery } from './query';

@Injectable()
export class ShopItemService {
  constructor(private readonly shopItemRepository: ShopItemRepository) {}

  async create(dto: CreateShopItemDto): Promise<Guitar> {
    const entity = new ShopItemEntity({ ...dto, comments: [] });
    return this.shopItemRepository.create(entity);
  }

  async delete(id: number) {
    await this.shopItemRepository.destroy(id);
  }

  async get(id: number): Promise<Guitar> {
    return this.shopItemRepository.findById(id);
  }

  async getAll(query: ShopItemQuery): Promise<Guitar[]> {
    return this.shopItemRepository.find(query)
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
