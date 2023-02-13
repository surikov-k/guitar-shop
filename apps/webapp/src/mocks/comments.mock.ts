import { CommentType } from '../types';

export const commentsMock: CommentType[] = [
  {
    id: 1,
    userId: 1,
    shopItemId: 1,
    advantages: 'Хороший корпус, чистый звук, стурны хорошего качества',
    disadvantages: 'Тугие колонки',
    text: 'У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня.',
    rating: 4,
    createdAt: '2023-02-12T09:58:41.010Z',
  },
  {
    id: 2,
    userId: 2,
    shopItemId: 1,
    advantages: 'Хороший корпус, чистый звук, стурны хорошего качества',
    disadvantages: 'Тугие колонки',
    text: 'У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня.',
    rating: 1,
    createdAt: '2023-02-12T09:58:41.010Z',
  },
  {
    id: 3,
    userId: 1,
    shopItemId: 1,
    advantages: 'Хороший корпус, чистый звук, стурны хорошего качества',
    disadvantages: 'Тугие колонки',
    text: 'У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня.',
    rating: 2,
    createdAt: '2023-02-12T09:58:41.010Z',
  },
]
