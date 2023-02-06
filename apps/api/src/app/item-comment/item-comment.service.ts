import { Injectable } from '@nestjs/common';

import { ItemCommentRepository } from './item-comment.repository';

@Injectable()
export class ItemCommentService {
  constructor(private readonly commentRepository: ItemCommentRepository) {}

  public async get(id: number) {
    return this.commentRepository.findById(id);
  }
}
