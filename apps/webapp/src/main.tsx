import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App, ErrorMessage } from './components';

import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchShopItemsAction } from './store/api-actions';

store.dispatch(fetchShopItemsAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
      <ErrorMessage/>
    </Provider>
  </StrictMode>
);
