import { CommentType, ShopItemType } from '../../types';
import { Comment } from '../comment';
import { ModalContext } from '../../contexts';
import { useContext } from 'react';
import { ModalReview } from '../modal-reveiew';

type CommentsListProps = {
  shopItem: ShopItemType,
  comments: CommentType[]
}

export function CommentsList({shopItem, comments }: CommentsListProps) {
  const { open } = useContext(ModalContext);
  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      <button
        onClick={() => {
          open(<ModalReview item={shopItem}/>)
        }}
        className="button button--red-border button--big reviews__sumbit-button"
      >Оставить отзыв
      </button>
      {
        comments.map((comment) => <Comment
          key={comment.id}
          comment={comment}/>)
      }

      <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
      <button
        className="button button--up button--red-border button--big reviews__up-button"
        style={{ zIndex: 1 }}
      >Наверх
      </button>
    </section>
  );
}
