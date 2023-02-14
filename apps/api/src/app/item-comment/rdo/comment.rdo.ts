import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { UserRdo } from '../../auth/rdo';

export class CommentRdo {
  @ApiProperty({
    description: 'Comment ID',
    example: '1',
  })
  @Expose()
  id: number;

  @ApiProperty({
    description: 'User',
    example: '2',
  })
  @Expose()
  @Type(() => UserRdo)
  author: UserRdo;


  @ApiProperty({
    description: 'Shop item ID',
    example: '12',
  })
  @Expose()
  shopItemId: number;

  @ApiProperty({
    description: 'Shop item advantages',
    example: 'Good feel, fun to play, good tone, solid electronics, good pick up',
  })
  @Expose()
  advantages: string;


  @ApiProperty({
    description: 'Shop item disadvantages',
    example: 'Fret buzz, flat sound, no pick, no dip switch sticker, and nut is off, poor fitting knob',
  })
  @Expose()
  disadvantages: string;


  @ApiProperty({
    description: 'Comment text',
    example: 'So in the 30 years I have been playing I have owned 5 Les Pauls and have played more than can be counted. I have always had love hate relationship with Les Pauls. I love the look, love the sound. However, I always hated the necks, too thick and sticky. Also they are incredibly heavy.',
  })
  @Expose()
  text: string;


  @ApiProperty({
    description: 'The shop item rating',
    example: 4,
  })
  @Expose()
  rating: number;


  @ApiProperty({
    description: 'Comment creation date',
    example: '2023-02-05T22:22:48.418Z',
  })
  @Expose()
  createdAt: Date;
}
