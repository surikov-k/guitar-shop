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
