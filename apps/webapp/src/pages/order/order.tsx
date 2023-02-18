import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { OrderItem } from '../../components';
import { useAppSelector } from '../../hooks';

export function Order() {
  const { id } = useParams();
  const orderId = parseInt(id as string, 10);
  const { orders } = useAppSelector((store) => store);

  if (isNaN(orderId)) {
    return <Navigate to={AppRoute.Root}/>
  }

  const order = orders.find((order) => order.id === orderId)

  if (!order) {
    return null
  }

  const {
    totalQuantity,
    createdAt,
    totalPrice,
    orderItems
  } = order;

  const date = new Date(createdAt);

  return (
    <main className="page-content">
      <Helmet>
        <title>Просмотр заказа — Guitar-shop</title>
        <meta
          name="description"
          content="Guitar-shop — описание"/>
      </Helmet>
      <section className="order">
        <div className="container">
          <h1 className="order__title">Заказ № {orderId}</h1>
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a
                className="link"
                href="./main.html">Каталог
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a
                className="link"
                href="#"> Заказы
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Заказ № 00-000-000</a>
            </li>
          </ul>
          <table className="order-table">
            <tbody>
            <tr>
              <td>Общее количество товаров</td>
              <td>{totalQuantity}</td>
            </tr>
            <tr>
              <td>Дата заказа</td>
              <td>{new Intl.DateTimeFormat('ru-Ru').format(date)}</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td>К оплате</td>
              <td>{totalPrice}<span>₽</span></td>
            </tr>
            </tfoot>
          </table>
          <ul className="order__list order-list">
            {
              orderItems.map((orderItem) => <OrderItem
                key={orderItem.shopItemId}
                orderItem={orderItem}/>) 
            }
          </ul>
          <Link
            to={AppRoute.OrderList}
            className="button order__button button--small button--black-border">Вернуться к списку заказов</Link>
        </div>
      </section>
    </main>
  );
}

