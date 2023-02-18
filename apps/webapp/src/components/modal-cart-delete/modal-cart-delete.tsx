import { ShopItemType } from '../../types';
import { useContext } from 'react';
import { ModalContext } from '../../contexts';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';

type ModalTypeRemoveProps = {
  shopItem: ShopItemType;
};

export function ModalCartDelete({ shopItem }: ModalTypeRemoveProps) {
  const { close } = useContext(ModalContext);

  const {
    name,
    photo,
    code,
    type,
    stringsNumber,
    price,
  } = shopItem;

  const deleteHandler = () => {
    close();
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div onClick={close} className="modal__overlay"></div>
        <div className="modal__content">
          <h2 className="modal__header title title--medium title--red">
            Удалить этот товар?
          </h2>
          <div className="modal__info">
            <img
              className="modal__img"
              src={`assets/img/content/${photo}`}
              srcSet={`img/content/${photo}@2x.png 2x`}
              width="67"
              height="137"
              alt="Честер bass"
            />
            <div className="modal__info-wrapper">
              <h3 className="modal__product-name title title--little title--uppercase">
                Гитара {name}
              </h3>
              <p className="modal__product-params modal__product-params--margin-11">
                Артикул: {code}
              </p>
              <p className="modal__product-params">{type}, {stringsNumber} струнная</p>
              <p className="modal__price-wrapper">
                <span className="modal__price">Цена:</span>
                <span className="modal__price">{price} ₽</span>
              </p>
            </div>
          </div>
          <div className="modal__button-container">
            <button
              onClick={deleteHandler}
              className="button button--small modal__button"
            >
              Удалить товар
            </button>
            <Link
              to={AppRoute.Root}
              onClick={close}
              className="button button--black-border button--small modal__button modal__button--right"
            >
              Продолжить покупки
            </Link>
          </div>
          <button
            onClick={close}
            className="modal__close-btn button-cross"
            type="button"
            aria-label="Закрыть"
          >
            <span className="button-cross__icon"></span>
            <span className="modal__close-btn-interactive-area"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
