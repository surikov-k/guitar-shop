import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { ShopItemType } from '../../types';
import { StarRating } from '../star-rating';

type CardProps = {
  item: ShopItemType
}

export function Card({ item }: CardProps): JSX.Element {
  const { id, name, photo, price, rating, comments } = item;

  return (
    <div className="product-card">
      <img
        src={`assets/img/content/${photo}`}
        srcSet={`assets/img/content/${photo}@2x.png 2x`}
        width="75"
        height="190"
        alt={`${name}`}
      />
      <div className="product-card__info">
        <div className="rate product-card__rate">
          <StarRating rating={rating}>
            <p className="rate__count">
              <span className="visually-hidden">Всего оценок:</span> {comments.length}
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
          className="button button--red button--mini button--add-to-cart"
        >
          Купить
        </button>
      </div>
    </div>
  );
}

