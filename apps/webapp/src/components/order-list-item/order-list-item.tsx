import { OrderType } from '../../types';
import { Link } from 'react-router-dom';

type OrderItemProps = {
  order: OrderType,
}

export function OrderListItem({ order }: OrderItemProps) {
  const {
    id,
    totalPrice,
    createdAt,
    totalQuantity,
  } = order;

  const date = new Date(createdAt);
  return (
    <li
      className="orders__item">
      <Link to={String(id)}>
        <h3 className="orders__number">Заказ № {id}</h3>
      </Link>
      <span className="orders__items">товаров&nbsp;
        <b className="orders__items-qty">{totalQuantity}</b></span>
      <span className="orders__date">
      {new Intl.DateTimeFormat('ru-Ru').format(date)}
      </span>
      <b className="orders__sum">{totalPrice}<span className="orders__rouble">₽</span></b>
      <button
        className="button button--small orders__remove-button"
        type="button">Удалить
      </button>
    </li>
  );
}
