import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Helmet} from 'react-helmet';

import Main from '../pages/main/main';
import Layout from '../components/layout/layout';
import ShopItem from '../pages/shop-item/shop-item';
import Registration from '../pages/registration/registration';
import Login from '../pages/login/login';
import { AppRoute, AuthStatus } from '../constants';
import AuthRoute from '../components/auth-route/auth-route';
import Cart from '../pages/cart/cart';
import AdminRoute from '../components/admin-route/admin-route';
import Order from '../pages/order/order';
import ShopItemsList from '../pages/shop-item-list/shop-items-list';
import AddItem from '../pages/add-item/add-item';
import OrderList from '../pages/order-list/order-list';
import NotFound from '../pages/not-found/not-found';

export function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Guitar-shop</title>
        <meta name="description" content="Guitar-shop — описание"/>
      </Helmet>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout/>}>
          <Route
            index
            element={<Main/>}/>
          <Route
            path={AppRoute.Registration}
            element={<Registration/>}/>
          <Route
            path={AppRoute.Login}
            element={<Login/>}/>
          <Route
            path={AppRoute.Item}
            element={<ShopItem/>}/>

          <Route
            path={AppRoute.Cart}
            element={
            <AuthRoute authStatus={AuthStatus.NoAuth}>
              <Cart/>
            </AuthRoute>
          }/>

          <Route
            path={AppRoute.Admin}
            element={<AdminRoute authStatus={AuthStatus.Admin}/>}>
            <Route
              index
              element={<ShopItemsList/>}/>
            <Route
              path={AppRoute.OrderList}
              element={<OrderList/>}/>
            <Route
              path={AppRoute.AddItem}
              element={<AddItem/>}/>
            <Route
              path={AppRoute.EditItem}
              element={<AddItem/>}/>
            <Route
              path={AppRoute.Order}
              element={<Order/>}/>
          </Route>
          <Route
            path="*"
            element={<NotFound/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
