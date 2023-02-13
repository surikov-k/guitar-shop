import { Helmet } from 'react-helmet';
import { OrderType } from '../../types';
import { OrderListItem } from '../../components';

type OrdersListProps = {
  orders: OrderType[]
}

export function OrdersList({orders}: OrdersListProps) {
  return (
    <main className="page-content orders__main">
      <Helmet>
        <title>Список заказов — Guitar-shop</title>
        <meta name="description" content="Guitar-shop — описание"/>
      </Helmet>
      <section className="orders">
        <div className="container">
          <h1 className="title title--bigger orders__title">Список заказов</h1>
          <ul className="breadcrumbs orders__breadcrumps">
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
          </ul>
          <div className="catalog-sort">
            <h2 className="catalog-sort__title">Сортировать:</h2>
            <div className="catalog-sort__type">
              <button
                className="catalog-sort__type-button catalog-sort__type-button--active"
                aria-label="по дате">по дате
              </button>
              <button
                className="catalog-sort__type-button"
                aria-label="по цене">по цене
              </button>
            </div>
            <div className="catalog-sort__order">
              <button
                className="catalog-sort__order-button catalog-sort__order-button--up"
                aria-label="По возрастанию"></button>
              <button
                className="catalog-sort__order-button catalog-sort__order-button--down"
                aria-label="По убыванию"></button>
            </div>
          </div>
          <ul className="orders__list">
            {
              orders.map((order) => <OrderListItem key={order.id} order={order}/>)
            }
          </ul>
          <div className="pagination orders__pagination">
            <ul className="pagination__list">
              <li className="pagination__page pagination__page--active">
                <a
                  className="link pagination__page-link"
                  href="1">1
                </a>
              </li>
              <li className="pagination__page">
                <a
                  className="link pagination__page-link"
                  href="2">2
                </a>
              </li>
              <li className="pagination__page">
                <a
                  className="link pagination__page-link"
                  href="3">3
                </a>
              </li>
              <li
                className="pagination__page pagination__page--next"
                id="next">
                <a
                  className="link pagination__page-link"
                  href="2">Далее
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>

  );
}

