export interface User {
  id?: number;
  email: string;
  name: string;
  passwordHash?: string;
  isAdmin: boolean;
}
