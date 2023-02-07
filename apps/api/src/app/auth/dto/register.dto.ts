import { ApiProperty } from '@nestjs/swagger';
import { IsEmailUnique } from '../../common/validators';
import { AuthError, PasswordLength, UsernameLength } from '../auth.constants';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    description: 'User\'s unique email',
    example: 'abby.montgomery@example.com'
  })
  @IsEmail()
  @IsEmailUnique({
    message: AuthError.ALREADY_EXISTS
  })
  public email: string

  @ApiProperty({
    description: 'User\'s name',
    example: 'Zoila Dicki',
    minimum: 1,
    maximum: 15,
  })
  @MinLength(UsernameLength.MIN, {
    message: AuthError.NAME_TOO_SHORT
  })
  @MaxLength(UsernameLength.MAX, {
    message: AuthError.NAME_TOO_LONG
  })
  public name: string

  @ApiProperty({
    description: 'User\'s password',
    minimum: 6,
    maximum: 12,
    example: '123456'
  })
  @MinLength(PasswordLength.MIN, {
    message: AuthError.PASSWORD_TOO_SHORT
  })
  @MaxLength(PasswordLength.MAX, {
    message: AuthError.PASSWORD_TOO_LONG
  })
  public password: string
}
