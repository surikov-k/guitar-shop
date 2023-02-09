import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Main(): JSX.Element {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">
            Каталог гитар
          </h1>
          <ul className="breadcrumbs page-content__breadcrumbs">
            <li className="breadcrumbs__item">
              <a className="link" href="./main.html">
                Главная
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Каталог</a>
            </li>
          </ul>
          <div className="catalog">
            <form className="catalog-filter">
              <h2 className="title title--bigger catalog-filter__title">
                Фильтр
              </h2>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">Цена, ₽</legend>
                <div className="catalog-filter__price-range">
                  <div className="form-input">
                    <label className="visually-hidden">Минимальная цена</label>
                    <input
                      id="priceMin"
                      type="number"
                      placeholder="1 000"
                      name="от"
                    />
                  </div>
                  <div className="form-input">
                    <label className="visually-hidden">Максимальная цена</label>
                    <input
                      id="priceMax"
                      type="number"
                      placeholder="30 000"
                      name="до"
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">
                  Тип гитар
                </legend>
                <div className="form-checkbox catalog-filter__block-item">
                  <input
                    className="visually-hidden"
                    id="acoustic"
                    type="checkbox"
                    name="acoustic"
                  />
                  <label htmlFor="acoustic">Акустические гитары</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input
                    className="visually-hidden"
                    id="electric"
                    type="checkbox"
                    name="electric"
                    checked
                  />
                  <label htmlFor="electric">Электрогитары</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input
                    className="visually-hidden"
                    id="ukulele"
                    type="checkbox"
                    name="ukulele"
                    checked
                  />
                  <label htmlFor="ukulele">Укулеле</label>
                </div>
              </fieldset>
              <fieldset className="catalog-filter__block">
                <legend className="catalog-filter__block-title">
                  Количество струн
                </legend>
                <div className="form-checkbox catalog-filter__block-item">
                  <input
                    className="visually-hidden"
                    id="4-strings"
                    type="checkbox"
                    name="4-strings"
                    checked
                  />
                  <label htmlFor="4-strings">4</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input
                    className="visually-hidden"
                    id="6-strings"
                    type="checkbox"
                    name="6-strings"
                    checked
                  />
                  <label htmlFor="6-strings">6</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input
                    className="visually-hidden"
                    id="7-strings"
                    type="checkbox"
                    name="7-strings"
                  />
                  <label htmlFor="7-strings">7</label>
                </div>
                <div className="form-checkbox catalog-filter__block-item">
                  <input
                    className="visually-hidden"
                    id="12-strings"
                    type="checkbox"
                    name="12-strings"
                    disabled
                  />
                  <label htmlFor="12-strings">12</label>
                </div>
              </fieldset>
              <button
                className="catalog-filter__reset-btn button button--black-border button--medium"
                type="reset"
              >
                Очистить
              </button>
            </form>
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
              <div className="product-card">
                <img
                  src="assets/img/content/catalog-product-0.png"
                  srcSet="assets/img/content/catalog-product-0@2x.png 2x"
                  width="75"
                  height="190"
                  alt="Liana Z100"
                />
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                  src="assets/img/content/catalog-product-1.png"
                  srcSet="assets/img/content/catalog-product-1@2x.png 2x"
                  width="75"
                  height="190"
                  alt="Честер Bass"
                />
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
                      <use xlinkHref="#icon-full-star"></use>
                    </svg>
                    <svg width="12" height="11" aria-hidden="true">
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
                  <a className="button button--mini" href="#">
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
                <li
                  className="pagination__page pagination__page--next"
                  id="next"
                >
                  <a className="link pagination__page-link" href="2">
                    Далее
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Main;
