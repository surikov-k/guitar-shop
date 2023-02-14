import cn from 'classnames';
import { Link } from 'react-router-dom';

import { LogoLink } from '../logo-link';
import { AppRoute, AuthStatus } from '../../constants';
import { useAppSelector } from '../../hooks';

export function Header(): JSX.Element {
  const { authStatus, username } = useAppSelector((state) => state);

  return (
    <header
      className={cn('header', {
        'header--logged': authStatus === AuthStatus.Auth,
        'header--admin': authStatus === AuthStatus.Admin,
      })}
      id="header"
    >
      <div className="container">
        <div className="header__wrapper">
          <LogoLink />
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link
                  className="link main-nav__link link--current"
                  to={AppRoute.Root}
                >
                  Каталог
                </Link>
              </li>
              {authStatus === AuthStatus.Auth && (
                <>
                  <li className="main-nav__item">
                    <Link className="link main-nav__link" to={AppRoute.Root}>
                      Где купить?
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link className="link main-nav__link" to={AppRoute.Root}>
                      О компании
                    </Link>
                  </li>
                </>
              )}
              {authStatus === AuthStatus.Admin && (
                <>
                  <li className="main-nav__item">
                    <Link
                      className="link main-nav__link"
                      to={AppRoute.OrderList}
                    >
                      Список заказов
                    </Link>
                  </li>
                  <li className="main-nav__item">
                    <Link className="link main-nav__link" to={AppRoute.Admin}>
                      Список товаров
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className="header__container">
            <span
              className="header__user-name"
              style={{ marginRight: '6px' }}
            >{`${username}`}</span>
            <Link
              className="header__link"
              to={AppRoute.Login}
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
            </Link>
            <Link
              className="header__cart-link"
              to={AppRoute.Cart}
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
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
