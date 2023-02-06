import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { fillObject } from '@guitar-shop/core';
import { ItemCommentService } from './item-comment.service';
import { CommentRdo } from './rdo';

@ApiTags('comments')
@Controller('comment')
export class ItemCommentController {
  constructor(private readonly commentService: ItemCommentService) {}

  @Get('/:id')
  public async get(@Param('id') id: number) {
    const comment = await this.commentService.get(id);
    return fillObject(CommentRdo, comment);
  }
}
