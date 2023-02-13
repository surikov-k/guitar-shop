import { CommentType } from '../../types';
import { Comment } from '../comment';

type CommentsListProps = {
  comments: CommentType[]
}

export function CommentsList({ comments }: CommentsListProps) {
  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <button
        className="button button--red-border button--big reviews__sumbit-button"
      >Оставить отзыв
      </button>
      {
        comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
      }

      <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
      <a
        className="button button--up button--red-border button--big reviews__up-button"
        href="#header"
        style={{ zIndex: 1 }}
      >Наверх
      </a>
    </section>
  );
}
