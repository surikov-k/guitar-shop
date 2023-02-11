export function ModalSuccessSend() {
  return (
    <div className="modal is-active modal--success modal-for-ui-kit">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          data-close-modal></div>
        <div className="modal__content">
          <svg
            className="modal__icon"
            width="26"
            height="20"
            aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <p className="modal__message">Спасибо за ваш заказ!</p>
          <div className="modal__button-container modal__button-container--send">
            <button className="button button--small modal__button modal__button--send">К покупкам!</button>
          </div>
          <button
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
