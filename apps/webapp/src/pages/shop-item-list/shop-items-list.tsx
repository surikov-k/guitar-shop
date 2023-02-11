import { Helmet } from 'react-helmet';
import { Filter } from '../../components';

export function ShopItemsList() {
  return (
    <main className="page-content">
      <Helmet>
        <title>Просмотр товаров — Guitar-shop</title>
        <meta name="description" content="Guitar-shop — описание"/>
      </Helmet>
      <section className="product-list">
        <div className="container">
          <h1 className="product-list__title">Список товаров</h1>
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a
                className="link"
                href="./main.html">Каталог
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Товары</a>
            </li>
          </ul>
          <div className="catalog">
            <Filter/>
            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button
                  className="catalog-sort__type-button catalog-sort__type-button--active"
                  aria-label="по цене">по дате
                </button>
                <button
                  className="catalog-sort__type-button"
                  aria-label="по цене">по цене
                </button>
                <button
                  className="catalog-sort__type-button"
                  aria-label="по популярности">по популярности
                </button>
              </div>
              <div className="catalog-sort__order">
                <button
                  className="catalog-sort__order-button catalog-sort__order-button--up"
                  aria-label="По возрастанию"></button>
                <button
                  className="catalog-sort__order-button catalog-sort__order-button--down catalog-sort__order-button--active"
                  aria-label="По убыванию"></button>
              </div>
            </div>
            <div className="catalog-cards">
              <ul className="catalog-cards__list">
                <li className="catalog-item">
                  <div className="catalog-item__data">
                    <img
                      src="img/content/catalog-product-1.png"
                      srcSet="img/content/catalog-product-1@2x.png 2x"
                      width="36"
                      height="93"
                      alt="Картинка гитары"/>
                    <div className="catalog-item__data-wrapper">
                      <p className="catalog-item__data-title">ЭлектроГитара Честер bass</p>
                      <div className="rate catalog-item__data-rate">
                        <svg
                          width="14"
                          height="14"
                          aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          aria-hidden="true">
                          <use xlinkHref="#icon-full-star"></use>
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          aria-hidden="true">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                        <p className="visually-hidden">Оценка: Хорошо</p>
                      </div>
                      <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                      <p className="catalog-item__data-price">17 500 ₽</p>
                    </div>
                  </div>
                  <div className="catalog-item__buttons">
                    <a
                      className="button button--small button--black-border"
                      href="edit-item.html"
                      aria-label="Редактировать товар">Редактировать
                    </a>
                    <button
                      className="button button--small button--black-border"
                      type="submit"
                      aria-label="Удалить товар">Удалить
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button className="button product-list__button button--red button--big">Добавить новый товар</button>
          <div className="pagination product-list__pagination">
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

