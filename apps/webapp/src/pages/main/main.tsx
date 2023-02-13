import { Breadcrumbs, Card, Filter } from '../../components';
import { ShopItemType } from '../../types';

type MainProps = {
  items: ShopItemType[]
}

export function Main({ items }: MainProps): JSX.Element {

  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">
          Каталог гитар
        </h1>
        <Breadcrumbs/>
        <div className="catalog">
          <Filter/>
          <div className="catalog-sort">
            <h2 className="catalog-sort__title">Сортировать:</h2>
            <div className="catalog-sort__type">
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
                className="catalog-sort__order-button catalog-sort__order-button--down"
                aria-label="По убыванию"
              ></button>
            </div>
          </div>
          <div className="cards catalog__cards">
            {items.map((item) => <Card
              key={item.id}
              item={item}/>)}
          </div>
          <div className="pagination page-content__pagination">
            <ul className="pagination__list">
              <li className="pagination__page pagination__page--active">
                <a
                  className="link pagination__page-link"
                  href="1">
                  1
                </a>
              </li>
              <li className="pagination__page">
                <a
                  className="link pagination__page-link"
                  href="2">
                  2
                </a>
              </li>
              <li className="pagination__page">
                <a
                  className="link pagination__page-link"
                  href="3">
                  3
                </a>
              </li>
              <li
                className="pagination__page pagination__page--next"
                id="next">
                <a
                  className="link pagination__page-link"
                  href="2">
                  Далее
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

