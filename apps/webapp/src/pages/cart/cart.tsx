import { Helmet } from 'react-helmet';
import { CartItem } from '../../components';
import { cartMock } from '../../mocks/cart.mock';


export function Cart() {
  const items =  cartMock;
  // const [cart, setCart] = useState<CartItemType[]>(cartMock)
  return (
    <main className="page-content">
      <Helmet>
        <title>Корзина — Guitar-shop</title>
        <meta name="description" content="Guitar-shop — описание"/>
      </Helmet>
      <div className="container">
        <h1 className="title title--bigger page-content__title">Корзина</h1>
        <ul className="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
          <li className="breadcrumbs__item">
            <a
              className="link"
              href="./main.html">Главная
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a
              className="link"
              href="./main.html">Каталог
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="link">Корзина</a>
          </li>
        </ul>
        <div className="cart">
          {
            items
              .map((item) => <CartItem key={item.shopItemId} cartItem={item}/> )
          }
          <div className="cart__footer">
            <div className="cart__total-info">
              <p className="cart__total-item">
                <span className="cart__total-value-name">Всего:</span><span className="cart__total-value">52 000 ₽</span>
              </p>
              <p className="cart__total-item">
                <span className="cart__total-value-name">К оплате:</span><span className="cart__total-value cart__total-value--payment">52 000 ₽</span>
              </p>
              <button className="button button--red button--big cart__order-button">Оформить заказ</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
