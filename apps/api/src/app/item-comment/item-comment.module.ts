import { Module } from '@nestjs/common';
import { ItemCommentService } from './item-comment.service';
import { ItemCommentController } from './item-comment.controller';
import { ItemCommentRepository } from './item-comment.repository';

@Module({
  providers: [ItemCommentService, ItemCommentRepository],
  controllers: [ItemCommentController],
  exports: [ItemCommentRepository]
})
export class ItemCommentModule {}
