import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'User\'s unique email',
    example: 'abby.montgomery@example.com'
  })
  public email: string;

  @ApiProperty({
    description: 'User\'s password',
    example: '123456'
  })
  public password: string;
}
