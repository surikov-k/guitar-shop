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

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="items" element={<ShopItemsList />} />
          <Route path="item/:id" element={<ShopItem />} />
          <Route path="cart" element={<Cart />} />
          <Route path="add" element={<AddItem />} />
          <Route path="edit/:id" element={<AddItem />} />
          <Route path="orders" element={<OrderList />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
