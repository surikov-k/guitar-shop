import {
  Controller,
  FileTypeValidator,
  HttpCode,
  HttpStatus,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AdminGuard } from '../../common/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiResponse } from '@nestjs/swagger';
import { ShopItemIdValidationPipe } from '../../common/pipes';
import { GetCurrentUserId } from '../../common/decorators';
import { fillObject } from '@guitar-shop/core';
import { CommentRdo } from '../item-comment/rdo';
import { ShopFileService } from './shop-file.service';
import { UploadFile } from './shop-file.constats';
import { diskStorage } from 'multer';

@Controller('file')
export class ShopFileController {
  private static parseFilePipeOptions = {
    validators: [
      new FileTypeValidator({ fileType: UploadFile.ALLOWED_TYPE }),
      new MaxFileSizeValidator({ maxSize: UploadFile.MAX_SIZE }),
    ],
  };

  constructor(private readonly fileService: ShopFileService) {}

  private static generateUploadFileName = (req, file, cb) => {
    const newName = `${Date.now()}.${file.originalname}`;
    cb(null, newName);
  };

  private static fileInterceptorOptions = {
    storage: diskStorage({
      destination: UploadFile.DIRECTORY,
      filename: ShopFileController.generateUploadFileName,
    }),
  };

  @Post('/:id')
  @UseGuards(AdminGuard)
  @UseInterceptors(
    FileInterceptor('file', ShopFileController.fileInterceptorOptions)
  )
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'File is created',
  })
  @HttpCode(HttpStatus.CREATED)
  public async saveFile(
    @Param('id', ShopItemIdValidationPipe) shopItemId: number,
    @UploadedFile(new ParseFilePipe(ShopFileController.parseFilePipeOptions))
    { filename }: Express.Multer.File,
    @GetCurrentUserId() userId: number
  ) {
    const comment = this.fileService.create({
      userId,
      shopItemId,
      filename,
    });

    return fillObject(CommentRdo, comment);
  }
}
