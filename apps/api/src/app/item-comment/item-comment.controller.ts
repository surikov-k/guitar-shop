import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { fillObject } from '@guitar-shop/core';
import { ItemCommentService } from './item-comment.service';
import { CommentRdo } from './rdo';

@ApiTags('comments')
@Controller('comment')
export class ItemCommentController {
  constructor(private readonly commentService: ItemCommentService) {}

  @Get('/:id')
  @ApiResponse({
    type: CommentRdo,
    status: HttpStatus.OK,
    description: 'Comment is found'
  })
  public async get(@Param('id') id: number) {
    const comment = await this.commentService.get(id);
    return fillObject(CommentRdo, comment);
  }
}
