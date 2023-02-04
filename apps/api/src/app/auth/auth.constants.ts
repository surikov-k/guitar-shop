export enum AuthError {
  ALREADY_EXISTS = 'User with this email already exists',
  NOT_FOUND = 'User not found',
  WRONG_PASSWORD = 'The password is wrong',
  INVALID_EMAIL = 'The email is not valid',
  WRONG_CREDENTIALS = 'Wrong email or password',
}
