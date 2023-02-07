import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'User\'s unique email',
    example: 'abby.montgomery@example.com'
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    description: 'User\'s password',
    example: '123456'
  })
  public password: string;
}
