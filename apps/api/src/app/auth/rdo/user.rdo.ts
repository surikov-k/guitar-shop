import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose()
  public id: number;

  @Expose()
  public email: string;

  @Expose()
  public name: string;

  @Expose()
  public isAdmin: boolean;
}
