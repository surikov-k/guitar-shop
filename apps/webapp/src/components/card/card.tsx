import { Link } from 'react-router-dom';
import { AppRoute, AuthStatus, BACKEND_IMAGES_URL } from '../../constants';
import { ShopItemType } from '../../types';
import { StarRating } from '../star-rating';
import { useContext } from 'react';
import { ModalContext } from '../../contexts';
import { ModalCartAdd } from '../modal-cart-add';
import { ModalEnter } from '../modal-enter';
import { useAppSelector } from '../../hooks';

type CardProps = {
  item: ShopItemType
}

export function Card({ item }: CardProps): JSX.Element {
  const {authStatus} = useAppSelector((state) => state);
  const { open } = useContext(ModalContext);
  const {
    id,
    name,
    photo,
    price,
    rating,
    commentsNumber
  } = item;

  const buyClickHandler = () => {
    if (authStatus !== AuthStatus.NoAuth) {
      open(<ModalCartAdd item={item}/>)
      return
    }
      open(<ModalEnter/>)
  }
  return (
    <div className="product-card">
      <img
        src={`${BACKEND_IMAGES_URL}/${photo}`}
        srcSet={`${BACKEND_IMAGES_URL}/${photo}@2x.png 2x`}
        width="75"
        height="190"
        alt={`${name}`}
      />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <StarRating rating={rating}>
            <p className="rate__count">
              <span className="visually-hidden">Всего оценок:</span> {commentsNumber}
            </p>
          </StarRating>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <Link
          className="button button--mini"
          to={AppRoute.Item.replace(':id', String(id))}>
          Подробнее
        </Link>
        <button
          onClick={buyClickHandler}
          className="button button--red button--mini button--add-to-cart"
        >
          Купить
        </button>
      </div>
    </div>
  );
}

