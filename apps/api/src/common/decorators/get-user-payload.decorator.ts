import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUserPayload = createParamDecorator(
  (data: undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return {
      email: request.user['email'],
      name: request.user['name'],
      isAdmin: request.user['isAdmin'],
    };
  }
);
