import { Injectable } from '@nestjs/common';

import { ShopFileRepository } from './shop-file.repository';
import { SaveFileDto } from './dto';
import { ShopFileEntity } from './shop-file.entity';

@Injectable()
export class ShopFileService {
  constructor(private readonly fileRepository: ShopFileRepository) {}

  public async create(dto: SaveFileDto) {
    const entity = new ShopFileEntity(dto);

    return this.fileRepository.create(entity);
  }
}
