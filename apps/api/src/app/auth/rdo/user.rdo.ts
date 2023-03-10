import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UserRdo {
  @ApiProperty({
    description: 'User\'s unique id',
    example: 100
  })
  @Expose()
  public id: number;

  @ApiProperty({
    description: 'User\'s unique email',
    example: 'abby.montgomery@example.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User\'s name',
    example: 'Abby Montgomery'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'Is the user admin or not',
    example: true
  })
  @Expose()
  public isAdmin: boolean;
}
