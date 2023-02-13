import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { useContext } from 'react';
import { ModalContext } from '../../contexts';

export function ModalEnter() {
  const {close} = useContext(ModalContext);
  return (
    <div className="modal is-active modal-enter">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={close}></div>
        <div className="modal__content">
          <div className="modal-enter">
            <h2 className="modal-enter__title">
              Для выполнения данного действия необходимо войти в&nbsp;систему
            </h2>
            <Link
              className="button button--big modal-enter__link"
              to={AppRoute.Login}
              onClick={close}
            >
              Войти
            </Link>
            <p className="modal-enter__text">
              Если у вас ещё нет аккаунта, необходимо <br />
              <Link to={AppRoute.Registration} onClick={close}>Зарегистрироваться</Link>

            </p>
          </div>
          <button
            className="modal__close-btn button-cross"
            type="button"
            aria-label="Закрыть"
            onClick={close}
          >
            <span className="button-cross__icon"></span>
            <span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
