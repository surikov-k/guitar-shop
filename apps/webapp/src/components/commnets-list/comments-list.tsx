import { CommentType, ShopItemType } from '../../types';
import { Comment } from '../comment';
import { ModalContext } from '../../contexts';
import { useContext, useState } from 'react';
import { ModalReview } from '../modal-reveiew';
import { useAppSelector } from '../../hooks';
import { AuthStatus } from '../../constants';

type CommentsListProps = {
  shopItem: ShopItemType,
  comments: CommentType[]
}

const COMMENTS_PER_CLICK = 3

export function CommentsList({ shopItem, comments }: CommentsListProps) {
  const [displayed, setDisplayed] = useState<number>(COMMENTS_PER_CLICK);

  const { open } = useContext(ModalContext);
  const { authStatus } = useAppSelector((state) => state)
  return (
    <section className="reviews">
      <h3 className="reviews__title title title--bigger">Отзывы</h3>
      {
        authStatus === AuthStatus.NoAuth
          ? null
          : <button
            onClick={() => {
              open(<ModalReview item={shopItem}/>)
            }}
            className="button button--red-border button--big reviews__sumbit-button"
          >Оставить отзыв
          </button>
      }

      {
        comments
          .map((comment) => <Comment
            key={comment.id}
            comment={comment}/>)
          .slice(0, displayed)
      }
      {
        comments.length > displayed
          ? <button
            className="button button--medium reviews__more-button"
            onClick={() => setDisplayed(displayed + COMMENTS_PER_CLICK)}
          >Показать еще отзывы
        </button>
          : ''
      }
      <button
        className="button button--up button--red-border button--big reviews__up-button"
        style={{ zIndex: 1 }}
      >Наверх
      </button>
    </section>
  )
    ;
}
