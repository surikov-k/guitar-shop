import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AdvantageLength, CommentError, DisadvantageLength, Rating, TextLength } from '../item-content.constants';

export class CreateCommentDto {
  @ApiProperty({
    description: 'Shop item advantages',
    minimum: 50,
    maximum: 100,
    example: 'Good feel, fun to play, good tone, solid electronics, good pick up',
  })
  @MinLength(AdvantageLength.MIN, {
    message: CommentError.ADVANTAGE_TOO_SHORT,
  })
  @MaxLength(AdvantageLength.MAX, {
    message: CommentError.ADVANTAGE_TOO_LONG,
  })
  @IsString()
  advantages: string;


  @ApiProperty({
    description: 'Shop item disadvantages',
    minimum: 50,
    maximum: 100,
    example: 'Fret buzz, flat sound, no pick, no dip switch sticker, and nut is off, poor fitting knob',
  })
  @MinLength(DisadvantageLength.MIN, {
    message: CommentError.DISADVANTAGE_TOO_SHORT,
  })
  @MaxLength(DisadvantageLength.MAX, {
    message: CommentError.DISADVANTAGE_TOO_LONG,
  })
  @IsString()
  disadvantages: string;


  @ApiProperty({
    description: 'Comment text',
    minimum: 5,
    maximum: 1024,
    example: 'So in the 30 years I have been playing I have owned 5 Les Pauls and have played more than can be counted. I have always had love hate relationship with Les Pauls. I love the look, love the sound. However, I always hated the necks, too thick and sticky. Also they are incredibly heavy.',
  })
  @MinLength(TextLength.MIN, {
    message: CommentError.TEXT_TOO_SHORT,
  })
  @MaxLength(TextLength.MAX, {
    message: CommentError.TEXT_TOO_LONG,
  })
  @IsString()
  text: string;


  @ApiProperty({
    description: 'The shop item rating. A number from 1 to 5',
    minimum: 1,
    maximum: 5,
    example: 4,
  })
  @Min(Rating.MIN, {
    message: CommentError.RATING_TOO_SMALL,
  })
  @Max(Rating.MAX, {
    message: CommentError.RATING_TOO_BIG,
  })
  @IsNumber()
  rating: number;
}

