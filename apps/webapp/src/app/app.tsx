import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from '../pages/main/main';
import Layout from '../components/layout/layout';
import ShopItem from '../pages/shop-item/shop-item';
import Cart from '../pages/cart/cart';
import Registration from '../pages/registration/registration';
import ShopItemsList from '../pages/shop-item-list/shop-items-list';
import Login from '../pages/login/login';
import AddItem from '../pages/add-item/add-item';
import NotFound from '../pages/not-found/not-found';
import Order from '../pages/order/order';
import OrderList from '../pages/order-list/order-list';
import { AppRoute } from '../constants';

export function App() {
  return (
    <BrowserRouter>
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
            path={AppRoute.ItemsList}
            element={<ShopItemsList/>}/>
          <Route
            path={AppRoute.Item}
            element={<ShopItem/>}/>
          <Route
            path={AppRoute.Cart}
            element={<Cart/>}/>
          <Route
            path={AppRoute.AddItem}
            element={<AddItem/>}/>
          <Route
            path={AppRoute.EditItem}
            element={<AddItem/>}/>
          <Route
            path="orders"
            element={<OrderList/>}/>
          <Route
            path={AppRoute.Order}
            element={<Order/>}/>
          <Route
            path="*"
            element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
