import { OrderItem as OrderItemType } from '@guitar-shop/shared-types';
import { shopItemsMock } from '../../mocks/shop-items.mock';

type OrderItemProps = {
  orderItem: OrderItemType
}

export function OrderItem({ orderItem }: OrderItemProps) {
  const {
    shopItemId,
    quantity,
    sum,
  } = orderItem;

  const shopItem = shopItemsMock.find(({ id }) => id === shopItemId);
  if (!shopItem) {
    return null
  }
  const {
    name,
    type,
    code,
    stringsNumber,
    photo,
  } = shopItem;

  return (
    <li className="order-list__item">
      <div className="order-list__data">
        <img
          src={`assets/img/content/${photo}`}
          srcSet={`assets/img/content/${photo}@2x.png 2x`}
          width="60"
          height="130"
          alt="Картинка гитары"/>
        <div className="order-list__container">
          <p className="order-list__name">{type} {name}</p>
          <p className="order-list__lot">Артикул: {code}</p>
          <p className="order-list__parameters">{type}, {stringsNumber} струнная</p>
        </div>
      </div>
      <span className="order-list__quantity">{quantity}</span>
      <span className="order-list__price">{sum} ₽</span>
      <button
        className="order-list__button button-cross"
        type="button"
        aria-label="Закрыть"><span className="button-cross__icon"></span>
      </button>
    </li>
  );
}
