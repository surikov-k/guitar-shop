type StarRatingProps = {
  size?: number,
  rating: number,
  stars?: number,
  children?: JSX.Element
}

const ratingDescription = [
  'Рейтинга нет', 'Очень плохо', 'Плохо', 'Нормально', 'Хорошо', 'Очень хорошо',
];

export function StarRating({ size = 12, rating, stars = 5, children }: StarRatingProps) {
  return (
    <>
      {
        Array.from({ length: 5 }, (_, i) => {
          return i < rating
            ? <svg
              key={`star${i}`}
              width={size}
              height={size}
              aria-hidden="true">
              <use xlinkHref="#icon-full-star"></use>
            </svg>
            : <svg
              key={`star${i}`}
              width={size}
              height={size}
              aria-hidden="true">
              <use xlinkHref="#icon-star"></use>
            </svg>
        })
      }
      <p className="visually-hidden">Рейтинг: {ratingDescription[rating]}</p>
      {children}
    </>
  );
}
