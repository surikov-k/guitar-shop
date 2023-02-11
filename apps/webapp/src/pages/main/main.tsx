import { Breadcrumbs, Card, Filter, ModalCartAdd } from '../../components';

export function Main(): JSX.Element {
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
            <Card/>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-1.png"
                srcSet="assets/img/content/catalog-product-1@2x.png 2x"
                width="75"
                height="190"
                alt="Честер Bass"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>15
                  </p>
                </div>
                <p className="product-card__title">Честер Bass</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>17 500 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red-border button--mini button--in-cart"
                  href="#"
                >
                  В Корзине
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-2.png"
                srcSet="assets/img/content/catalog-product-2@2x.png 2x"
                width="75"
                height="190"
                alt="Roman RX"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>76
                  </p>
                </div>
                <p className="product-card__title">Roman RX</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>4 800 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red button--mini button--add-to-cart"
                  href="#"
                >
                  Купить
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-3.png"
                srcSet="assets/img/content/catalog-product-3@2x.png 2x"
                width="75"
                height="190"
                alt="Liana Z100"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>9
                  </p>
                </div>
                <p className="product-card__title">Liana Z100</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>10 500 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red button--mini button--add-to-cart"
                  href="#"
                >
                  Купить
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-4.png"
                srcSet="assets/img/content/catalog-product-4@2x.png 2x"
                width="75"
                height="190"
                alt="Roman RX"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>76
                  </p>
                </div>
                <p className="product-card__title">Roman RX</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>4 800 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red button--mini button--add-to-cart"
                  href="#"
                >
                  Купить
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-5.png"
                srcSet="assets/img/content/catalog-product-5@2x.png 2x"
                width="75"
                height="190"
                alt="Честер Bass"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>15
                  </p>
                </div>
                <p className="product-card__title">Честер Bass</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>17 500 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red-border button--mini button--in-cart"
                  href="#"
                >
                  В Корзине
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-6.png"
                srcSet="assets/img/content/catalog-product-6@2x.png 2x"
                width="75"
                height="190"
                alt="Честер Bass"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>15
                  </p>
                </div>
                <p className="product-card__title">Честер Bass</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>17 500 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red-border button--mini button--in-cart"
                  href="#"
                >
                  В Корзине
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-7.png"
                srcSet="assets/img/content/catalog-product-7@2x.png 2x"
                width="75"
                height="190"
                alt="Liana Z100"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>9
                  </p>
                </div>
                <p className="product-card__title">Liana Z100</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>10 500 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red button--mini button--add-to-cart"
                  href="#"
                >
                  Купить
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                src="assets/img/content/catalog-product-8.png"
                srcSet="assets/img/content/catalog-product-8@2x.png 2x"
                width="75"
                height="190"
                alt="Roman RX"
              />
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-full-star"></use>
                  </svg>
                  <svg
                    width="12"
                    height="11"
                    aria-hidden="true">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                  <p className="visually-hidden">Рейтинг: Хорошо</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>76
                  </p>
                </div>
                <p className="product-card__title">Roman RX</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>4 800 ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <a
                  className="button button--mini"
                  href="#">
                  Подробнее
                </a>
                <a
                  className="button button--red button--mini button--add-to-cart"
                  href="#"
                >
                  Купить
                </a>
              </div>
            </div>
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
          <ModalCartAdd/>
        </div>
      </div>
    </main>
  );
}

