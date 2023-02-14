import { shopItemsMock } from '../../mocks/shop-items.mock';
import { CartItemType } from '../../types';
import { BACKEND_IMAGES_URL } from '../../constants';

type CartItemProps = {
  cartItem: CartItemType;
};

export function CartItem({ cartItem }: CartItemProps) {
  const { shopItemId, quantity } = cartItem;
  const shopItem = shopItemsMock.find(({ id }) => id === shopItemId);

  if (!shopItem) {
    return null;
  }

  const {
    photo,
    name,
    type,
    code,
    stringsNumber,
    price ,
  } = shopItem;

  return (
    <div className="cart-item">
      <button
        className="cart-item__close-button button-cross"
        type="button"
        aria-label="Удалить"
      >
        <span className="button-cross__icon"></span>
        <span className="cart-item__close-button-interactive-area"></span>
      </button>
      <div className="cart-item__image">
        <img
          src={`${BACKEND_IMAGES_URL}/${photo}`}
          srcSet={`${BACKEND_IMAGES_URL}/${photo}@2x.png 2x`}
          width="55"
          height="130"
          alt={name}
        />
      </div>
      <div className="product-info cart-item__info">
        <p className="product-info__title">{`${type} ${name}`}</p>
        <p className="product-info__info">Артикул: {code}</p>
        <p className="product-info__info">{`${type}, ${stringsNumber} струнная`}</p>
      </div>
      <div className="cart-item__price">{price} ₽</div>
      <div className="quantity cart-item__quantity">
        <button
          className="quantity__button"
          aria-label="Уменьшить количество">
          <svg
            width="8"
            height="8"
            aria-hidden="true">
            <use xlinkHref="#icon-minus"></use>
          </svg>
        </button>
        <input
          className="quantity__input"
          type="number"
          placeholder="1"
          id="1-count"
          name="1-count"
          max="99"
          value={quantity}
        />
        <button
          className="quantity__button"
          aria-label="Увеличить количество">
          <svg
            width="8"
            height="8"
            aria-hidden="true">
            <use xlinkHref="#icon-plus"></use>
          </svg>
        </button>
      </div>
      <div className="cart-item__price-total">{quantity * price} ₽</div>
    </div>
  );
}
