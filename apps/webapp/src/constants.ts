export const SHOW_ERROR_TIMEOUT = 4000;

export enum AppRoute {
  Root = '/',
  Registration = '/registration',
  Login = '/login',
  ItemsList = 'list',
  Item = '/item/:id',
  Cart = '/cart',
  AddItem = 'add',
  EditItem = 'item/:id/edit',
  Order = 'orders/:id',
  OrderList = '/admin/orders',
  Admin = '/admin',
}

export enum AuthStatus {
  Auth = 'AUTH',
  Admin = 'ADMIN',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const BACKEND_URL = 'http://localhost:3330/api';
export const BACKEND_IMAGES_URL = 'http://localhost:3330/uploads';
export const REQUEST_TIMEOUT = 5000;
export const AUTH_TOKEN_STORAGE_KEY = 'guitar-store-token'

export enum ApiRoute {
  Auth = 'auth',
  ItemComments = '/item/:id/comments',
  Login = 'auth/login',
  Register = 'auth/register',
  Orders = 'order',
  ShopItems = 'item',
}
