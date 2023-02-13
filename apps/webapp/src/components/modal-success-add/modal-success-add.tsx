import { useContext } from 'react';
import { ModalContext } from '../../contexts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

export function ModalSuccessAdd() {
  const {close} = useContext(ModalContext);
  return (
    <div className="modal is-active modal--success">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={close}></div>
        <div className="modal__content">
          <svg
            className="modal__icon"
            width="26"
            height="20"
            aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <p className="modal__message">Товар успешно добавлен в корзину</p>
          <div className="modal__button-container modal__button-container--add">
            <Link
              onClick={close}
              to={AppRoute.Cart}
              className="button button--small modal__button">Перейти в корзину</Link>
            <button
              onClick={close}
              className="button button--black-border button--small modal__button modal__button--right">Продолжить покупки</button>
          </div>
          <button
            onClick={close}
            className="modal__close-btn button-cross"
            type="button"
            aria-label="Закрыть">
            <span className="button-cross__icon"></span><span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
