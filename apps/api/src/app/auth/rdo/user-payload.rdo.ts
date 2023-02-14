import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserPayloadRdo {
  @ApiProperty({
    description: 'User\'s unique email',
    example: 'abby.montgomery@example.com'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User\'s name',
    example: 'abby montgomery'
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
