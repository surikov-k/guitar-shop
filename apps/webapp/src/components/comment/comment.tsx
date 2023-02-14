import { CommentType } from '../../types';
import { StarRating } from '../star-rating';

type CommentProps = {
  comment: CommentType
}

export function Comment({ comment }: CommentProps) {
  const {
    author,
    createdAt,
    rating,
    advantages,
    disadvantages,
    text
  } = comment;
  const date = new Date(createdAt);
  return (
    <div className="review">
      <div className="review__wrapper">
        <h4 className="review__title review__title--author title title--lesser">{author.name}</h4>
        <span className="review__date">{new Intl.DateTimeFormat('ru-Ru', {
          day: '2-digit',
          month: 'long'
        }).format(date)}</span>
      </div>
      <div className="rate review__rating-panel">
        <StarRating
          rating={rating}
          size={16}/>
      </div>
      <h4 className="review__title title title--lesser">Достоинства:</h4>
      <p className="review__value">{advantages}</p>
      <h4 className="review__title title title--lesser">Недостатки:</h4>
      <p className="review__value">{disadvantages}</p>
      <h4 className="review__title title title--lesser">Комментарий:</h4>
      <p className="review__value">{text}</p>
    </div>
  );
}
