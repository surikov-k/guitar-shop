import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LoggedRdo {
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
    description: 'Access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  })
  @Expose()
  public accessToken: string;
}
