export const COMMENTS_LIMIT = 50;

export enum AdvantageLength {
  MIN = 50,
  MAX = 100
}

export enum DisadvantageLength {
  MIN = 50,
  MAX = 100
}

export enum TextLength {
  MIN = 5,
  MAX = 1024
}

export enum Rating {
  MIN = 1,
  MAX = 5
}

export enum CommentError {
  ADVANTAGE_TOO_SHORT = 'Shop item advantage is too short',
  ADVANTAGE_TOO_LONG = 'Shop item advantage is too long',
  DISADVANTAGE_TOO_SHORT = 'Shop item disadvantage is too short',
  DISADVANTAGE_TOO_LONG = 'Shop item disadvantage is too long',
  TEXT_TOO_SHORT = 'Comment text is too short',
  TEXT_TOO_LONG = 'Comment text is too long',
  RATING_TOO_SMALL = 'Shop item rating is too small',
  RATING_TOO_BIG = 'Shop item rating is too big',
}
