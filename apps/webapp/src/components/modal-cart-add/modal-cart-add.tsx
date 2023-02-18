import { useContext } from 'react';
import { ModalContext } from '../../contexts';
import { ShopItemType } from '../../types';
import { cartMock } from '../../mocks/cart.mock';
import { ModalSuccessAdd } from '../modal-success-add';

type ModalTypeAddProps = {
  item: ShopItemType;
};

export function ModalCartAdd({ item }: ModalTypeAddProps) {
  const { id, name, photo, type, stringsNumber, code, price } = item;
  const { close, open } = useContext(ModalContext);
  const cart = cartMock;

  const addToCartHandle = () => {
    if (!id) {
      return;
    }
    const cartItem = cart
      .find(({ shopItemId }) => shopItemId === id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({shopItemId: id, quantity: 1});
    }
    close()
    open(<ModalSuccessAdd/>)
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={close}></div>
        <div className="modal__content">
          <h2 className="modal__header title title--medium">
            Добавить товар в корзину
          </h2>
          <div className="modal__info">
            <img
              className="modal__img"
              src={`assets/img/content/${photo}`}
              srcSet={`assets/img/content/${photo}@2x.png 2x`}
              width="67"
              height="137"
              alt={name}
            />
            <div className="modal__info-wrapper">
              <h3 className="modal__product-name title title--little title--uppercase">
                Гитара {name}
              </h3>
              <p className="modal__product-params modal__product-params--margin-11">
                Артикул: {code}
              </p>
              <p className="modal__product-params">
                {type}, {stringsNumber} струнная
              </p>
              <p className="modal__price-wrapper">
                <span className="modal__price">Цена:</span>
                <span className="modal__price">{price} ₽</span>
              </p>
            </div>
          </div>
          <div className="modal__button-container">
            <button
              onClick={addToCartHandle}
              className="button button--red button--big modal__button modal__button--add"
            >
              Добавить в корзину
            </button>
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
