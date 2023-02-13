import { Helmet } from 'react-helmet';
import { AdminShopItem, Filter } from '../../components';
import { ShopItemType } from '../../types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type AdminListProps = {
  items: ShopItemType[];
};

export function AdminList({ items }: AdminListProps) {
  return (
    <main className="page-content">
      <Helmet>
        <title>Просмотр товаров — Guitar-shop</title>
        <meta name="description" content="Guitar-shop — описание" />
      </Helmet>
      <section className="product-list">
        <div className="container">
          <h1 className="product-list__title">Список товаров</h1>
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a className="link" href="./main.html">
                Каталог
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Товары</a>
            </li>
          </ul>
          <div className="catalog">
            <Filter />
            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button
                  className="catalog-sort__type-button catalog-sort__type-button--active"
                  aria-label="по цене"
                >
                  по дате
                </button>
                <button
                  className="catalog-sort__type-button"
                  aria-label="по цене"
                >
                  по цене
                </button>
                <button
                  className="catalog-sort__type-button"
                  aria-label="по популярности"
                >
                  по популярности
                </button>
              </div>
              <div className="catalog-sort__order">
                <button
                  className="catalog-sort__order-button catalog-sort__order-button--up"
                  aria-label="По возрастанию"
                ></button>
                <button
                  className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--active"
                  aria-label="По убыванию"
                ></button>
              </div>
            </div>
            <div className="catalog-cards">
              <ul className="catalog-cards__list">
                {items.map((item) => (
                  <AdminShopItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </div>
          <Link
            to={AppRoute.AddItem}
            className="button product-list__button button--red button--big"
          >
            Добавить новый товар
          </Link>
          <div className="pagination product-list__pagination">
            <ul className="pagination__list">
              <li className="pagination__page pagination__page--active">
                <a className="link pagination__page-link" href="1">
                  1
                </a>
              </li>
              <li className="pagination__page">
                <a className="link pagination__page-link" href="2">
                  2
                </a>
              </li>
              <li className="pagination__page">
                <a className="link pagination__page-link" href="3">
                  3
                </a>
              </li>
              <li className="pagination__page pagination__page--next" id="next">
                <a className="link pagination__page-link" href="2">
                  Далее
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
