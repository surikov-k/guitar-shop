import { ShopItemType } from '../../types';
import { ModalContext } from '../../contexts';
import { useContext } from 'react';
import { ModalSuccessReview } from '../modal-success-review';
import { useForm } from 'react-hook-form';
import { Comment } from '@guitar-shop/shared-types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../store/api-actions';

type ModalReviewProps = {
  item: ShopItemType
}

enum ReviewConstraint {
  AdvantageMin = 50,
  AdvantageMax = 100,
  DisadvantageMin = 50,
  DisadvantageMax = 100,
  TextMin = 5,
  TextMax = 1024,
  RatingMin = 1,
  RatingMax = 5
}

enum ReviewError {
  AdvantageMin = 'Минимальная длина 50 символов',
  AdvantageMax = 'Максимальная длина 100 символов',
  DisadvantageMin = 'Минимальная длина 50 символов',
  DisadvantageMax = 'Максимальная длина 100 символов',
  TextMin = 'Минимальная длина 5 символов',
  TextMax = 'Максимальная длина 1024 символа',
  RatingMin = 'Число от 1 до 5',
  RatingMax = 'Число от 1 до 5',
}

export function ModalReview({ item }: ModalReviewProps) {
  const { close, open } = useContext(ModalContext);
  const { name } = item;
  const {user} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<Comment>();

  const reviewSubmitHandler = (comment: Comment) => {
    comment = {...comment, rating: +comment.rating};
    if (item.id) {
    dispatch(postCommentAction({ comment, shopItemId: item.id } ))
    }
    close();
    open(<ModalSuccessReview/>)
  }
  return (
    <div className="modal is-active modal--review">
      <div className="modal__wrapper">
        <div
          className="modal__overlay"
          onClick={close}></div>
        <div className="modal__content">
          <h2 className="modal__header modal__header--review title title--medium">Оставить отзыв</h2>
          <form
            className="form-review"
            onSubmit={handleSubmit(reviewSubmitHandler)}>
            <div className="form-review__wrapper">
              <h3 className="form-review__title">{name}</h3>
              <div>
                <span className="form-review__label form-review__label--required form-review__label--star">Ваша Оценка</span>
                <div className="rate rate--reverse">
                  <input
                    className="visually-hidden"
                    id="star-5"
                    {...register('rating', {
                      required: 'Поставьте оценку',
                      min: {
                        value: ReviewConstraint.RatingMin,
                        message: ReviewError.RatingMin
                      },
                      max: {
                        value: ReviewConstraint.RatingMax,
                        message: ReviewError.RatingMax
                      },
                    })}
                    type="radio"
                    value="5"/>
                  <label
                    className="rate__label"
                    htmlFor="star-5"
                    title="Отлично"></label>
                  <input
                    className="visually-hidden"
                    id="star-4"
                    {...register('rating', {
                      required: 'Поставьте оценку',
                      min: {
                        value: ReviewConstraint.RatingMin,
                        message: ReviewError.RatingMin
                      },
                      max: {
                        value: ReviewConstraint.RatingMax,
                        message: ReviewError.RatingMax
                      },
                    })}
                    type="radio"
                    value="4"/>
                  <label
                    className="rate__label"
                    htmlFor="star-4"
                    title="Хорошо"></label>
                  <input
                    className="visually-hidden"
                    id="star-3"
                    {...register('rating', {
                      required: 'Поставьте оценку',
                      min: {
                        value: ReviewConstraint.RatingMin,
                        message: ReviewError.RatingMin
                      },
                      max: {
                        value: ReviewConstraint.RatingMax,
                        message: ReviewError.RatingMax
                      },
                    })}
                    type="radio"
                    value="3"/>
                  <label
                    className="rate__label"
                    htmlFor="star-3"
                    title="Нормально"></label>
                  <input
                    className="visually-hidden"
                    id="star-2"
                    {...register('rating', {
                      required: 'Поставьте оценку',
                      min: {
                        value: ReviewConstraint.RatingMin,
                        message: ReviewError.RatingMin
                      },
                      max: {
                        value: ReviewConstraint.RatingMax,
                        message: ReviewError.RatingMax
                      },
                    })}
                    type="radio"
                    value="2"/>
                  <label
                    className="rate__label"
                    htmlFor="star-2"
                    title="Плохо"></label>
                  <input
                    className="visually-hidden"
                    {...register('rating', {
                      required: 'Поставьте оценку',
                      min: {
                        value: ReviewConstraint.RatingMin,
                        message: ReviewError.RatingMin
                      },
                      max: {
                        value: ReviewConstraint.RatingMax,
                        message: ReviewError.RatingMax
                      },
                    })}
                    id="star-1"
                    type="radio"
                    value="1"/>
                  <label
                    className="rate__label"
                    htmlFor="star-1"
                    title="Ужасно"></label>
                  <p
                    className="rate__message"
                    style={{ visibility: `${errors.rating ? 'inherit' : 'hidden'}` }}
                  >
                    {errors?.rating?.message || 'Ошибка'}
                  </p>
                </div>
              </div>
            </div>
            <label
              className="form-review__label form-review__label--required"
              htmlFor="advantage">Достоинства</label>
            <input
              className="form-review__input"
              {...register('advantages', {
                required: 'Заполните поле',
                minLength: {
                  value: ReviewConstraint.AdvantageMin,
                  message: ReviewError.AdvantageMin
                },
                maxLength: {
                  value: ReviewConstraint.AdvantageMax,
                  message: ReviewError.AdvantageMax
                },
              })}
              id="advantage"
              type="text"
              autoComplete="off"/>
            <p
              className="form-review__warning"
              style={{ visibility: `${errors.advantages ? 'inherit' : 'hidden'}` }}
            >
              {errors?.advantages?.message || 'Ошибка'}
            </p>

            <label
              className="form-review__label form-review__label--required"
              htmlFor="disadv">Недостатки</label>
            <input
              className="form-review__input"
              {...register('disadvantages', {
                required: 'Заполните поле',
                minLength: {
                  value: ReviewConstraint.DisadvantageMin,
                  message: ReviewError.DisadvantageMin
                },
                maxLength: {
                  value: ReviewConstraint.DisadvantageMax,
                  message: ReviewError.DisadvantageMax
                },
              })}
              id="disadv"
              type="text"
              autoComplete="off"/>
            <p
              className="form-review__warning"
              style={{ visibility: `${errors.disadvantages ? 'inherit' : 'hidden'}` }}
            >
              {errors?.disadvantages?.message || 'Ошибка'}
            </p>
            <label
              className="form-review__label form-review__label--required form-review__label--textarea"
              htmlFor="comment">Комментарий</label>
            <textarea
              className="form-review__input form-review__input--textarea"
              {...register('text', {
                required: 'Заполните поле',
                minLength: {
                  value: ReviewConstraint.TextMin,
                  message: ReviewError.TextMin
                },
                maxLength: {
                  value: ReviewConstraint.TextMax,
                  message: ReviewError.TextMax
                },
              })}
              id="comment"
              autoComplete="off"></textarea>
            <p
              className="form-review__warning"
              style={{ visibility: `${errors.text ? 'inherit' : 'hidden'}` }}
            >
              {errors?.text?.message || 'Ошибка'}
            </p>
            <button
              className="button button--medium-20 form-review__button"
              type="submit">Отправить отзыв
            </button>
          </form>
          <button
            onClick={close}
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
