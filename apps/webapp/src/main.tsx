import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './components';

import { shopItemsMock } from './mocks/shop-items.mock';
import { cartMock } from './mocks/cart.mock';
import { ordersMock } from './mocks/orders.mock';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App
      items = {shopItemsMock}
      cart={cartMock}
      orders={ordersMock}
    />
  </StrictMode>
);
