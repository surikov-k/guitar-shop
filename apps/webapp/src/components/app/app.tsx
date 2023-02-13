import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { AppRoute, AuthStatus } from '../../constants';
import {
  AddItem,
  AdminList,
  Cart,
  Login,
  Main,
  NotFound,
  Order,
  OrdersList,
  Registration,
  ShopItem
} from '../../pages';
import { AdminRoute, AuthRoute, Layout } from '../../components';
import { ModalProvider } from '../../contexts';

export function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Helmet>
          <title>Guitar-shop</title>
          <meta
            name="description"
            content="Guitar-shop — описание"/>
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
                <AuthRoute authStatus={AuthStatus.Auth}>
                  <Cart/>
                </AuthRoute>
              }/>

            <Route
              path={AppRoute.Admin}
              element={<AdminRoute authStatus={AuthStatus.Admin}/>}>
              <Route
                index
                element={<AdminList/>}/>
              <Route
                path={AppRoute.OrderList}
                element={<OrdersList/>}/>
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
      </ModalProvider>
    </BrowserRouter>
  );
}
