function Main(): JSX.Element {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header__wrapper">
            <a className="header__logo logo">
              <img
                className="logo__img"
                src="assets/img/svg/logo.svg"
                width="70"
                height="70"
                alt="Логотип"
              />
            </a>
            <nav className="main-nav">
              <ul className="main-nav__list">
                <li className="main-nav__item">
                  <a className="link main-nav__link link--current" href="#">
                    Каталог
                  </a>
                </li>
                <li className="main-nav__item">
                  <a className="link main-nav__link" href="#">
                    Где купить?
                  </a>
                </li>
                <li className="main-nav__item">
                  <a className="link main-nav__link" href="#">
                    О компании
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__container">
              <span className="header__user-name">Имя</span>
              <a
                className="header__link"
                href="login.html"
                aria-label="Перейти в личный кабинет"
              >
                <svg
                  className="header__link-icon"
                  width="12"
                  height="14"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-account"></use>
                </svg>
                <span className="header__link-text">Вход</span>
              </a>
              <a
                className="header__cart-link"
                href="cart.html"
                aria-label="Перейти в корзину"
              >
                <svg
                  className="header__cart-icon"
                  width="14"
                  height="14"
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-basket"></use>
                </svg>
                <span className="header__cart-count">2</span>
              </a>
            </div>
          </div>
        </div>
      </header>
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
      <footer className="footer">
        <div className="container">
          <div className="footer__container">
            <div className="footer__logo-wrapper">
              <a className="footer__logo logo">
                <img
                  className="logo__img"
                  src="./assets/img/svg/logo.svg"
                  width="70"
                  height="70"
                  alt="Логотип"
                />
              </a>
              <div className="socials footer__socials">
                <ul className="socials__list">
                  <li className="socials-item">
                    <a
                      className="socials__link"
                      href="https://www.skype.com/"
                      aria-label="Мы в skype"
                    >
                      <svg
                        className="socials__icon"
                        width="24"
                        height="24"
                        aria-hidden="true"
                      >
                        <use xlinkHref="#icon-skype"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials-item">
                    <a
                      className="socials__link"
                      href="https://www.vsco.co/"
                      aria-label="Мы в vsco"
                    >
                      <svg
                        className="socials__icon"
                        width="24"
                        height="24"
                        aria-hidden="true"
                      >
                        <use xlinkHref="#icon-vsco"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="socials-item">
                    <a
                      className="socials__link"
                      href="https://www.pinterest.com/"
                      aria-label="Мы в pinterest"
                    >
                      <svg
                        className="socials__icon"
                        width="24"
                        height="24"
                        aria-hidden="true"
                      >
                        <use xlinkHref="#icon-pinterest"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <section className="footer__nav-section footer__nav-section--about">
              <h2 className="footer__nav-title footer__nav-title--about">
                О нас
              </h2>
              <p className="footer__nav-text footer__nav-text--about">
                Магазин гитар, музыкальных
                <br /> инструментов и&nbsp;гитарная мастерская
                в&nbsp;Санкт-Петербурге.
              </p>
              <p className="footer__nav-text footer__nav-text--about">
                Все инструменты проверены, отстроены и&nbsp;доведены
                до&nbsp;идеала!
              </p>
            </section>
            <section className="footer__nav-section footer__nav-section--links">
              <h2 className="footer__nav-title footer__nav-title--links">
                Информация
              </h2>
              <ul className="footer__nav-list">
                <li className="footer__nav-list-item">
                  <a className="link footer__nav-link" href="#top">
                    Где купить?
                  </a>
                </li>
                <li className="footer__nav-list-item">
                  <a className="link footer__nav-link" href="#top">
                    Блог
                  </a>
                </li>
                <li className="footer__nav-list-item">
                  <a className="link footer__nav-link" href="#top">
                    Вопрос - ответ
                  </a>
                </li>
                <li className="footer__nav-list-item">
                  <a className="link footer__nav-link" href="#top">
                    Возврат
                  </a>
                </li>
                <li className="footer__nav-list-item">
                  <a className="link footer__nav-link" href="#top">
                    Сервис-центры
                  </a>
                </li>
              </ul>
            </section>
            <section className="footer__nav-section footer__nav-section--contacts">
              <h2 className="footer__nav-title footer__nav-title--contacts">
                Контакты
              </h2>
              <p className="footer__nav-text footer__nav-text--address">
                г. Санкт-Петербург,
                <br /> м. Невский проспект, ул. Казанская 6.
              </p>
              <a
                className="link footer__nav-link footer__nav-link--phone"
                href="tel:88125005050"
              >
                8-812-500-50-50
              </a>
              <p className="footer__nav-text footer__nav-text--work-hours-title">
                Режим работы:
                <span className="footer__nav-text footer__nav-text--work-hours">
                  с 11:00 до 20:00
                </span>
              </p>
              <p className="footer__nav-text footer__nav-text--weekends">
                без выходных
              </p>
            </section>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Main;
