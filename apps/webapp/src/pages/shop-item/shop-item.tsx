import { Helmet } from 'react-helmet';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cn from 'classnames';

import { AppRoute, BACKEND_IMAGES_URL } from '../../constants';
import { CommentsList, StarRating } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction } from '../../store/api-actions';

enum Tab {
  Params,
  Description
}

export function ShopItem() {
  const { shopItems } = useAppSelector((state) => state)
  const [tab, setTab] = useState<Tab>(Tab.Params)

  const dispatch = useAppDispatch();

  const { id } = useParams()
  const shopItemId = parseInt(id as string, 10);

  useEffect(() => {
    dispatch(fetchCommentsAction(shopItemId))
  }, [dispatch, id, shopItemId]);

  const comments = useAppSelector((state) => [...state.comments].sort((commentA, commentB) => new Date(commentB.createdAt).getDate() - new Date(commentA.createdAt).getDate()))

  if (isNaN(shopItemId)) {
    return <Navigate to={AppRoute.Root}/>;
  }
  const shopItem = shopItems
    .find(({ id }) => shopItemId === id);


  if (shopItem === undefined) {
    return <Navigate to={AppRoute.Root}/>;
  }

  const {
    name,
    photo,
    rating,
    commentsNumber,
    code,
    type,
    stringsNumber,
    description,
    price
  } = shopItem;

  return (
    <main className="page-content">
      <Helmet>
        <title>{`${name}`} — Guitar-shop</title>
        <meta
          name="description"
          content="Guitar-shop — описание"/>
      </Helmet>
      <div className="container">
        <h1 className="page-content__title title title--bigger">Товар</h1>
        <ul className="breadcrumbs page-content__breadcrumbs">
          <li className="breadcrumbs__item">
            <a
              className="link"
              href="./main.html">Главная
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a
              className="link"
              href="./main.html">Каталог
            </a>
          </li>
          <li className="breadcrumbs__item">
            <a className="link">Товар</a>
          </li>
        </ul>
        <div className="product-container">
          <img
            className="product-container__img"
            src={`${BACKEND_IMAGES_URL}/${photo}`}
            srcSet={`${BACKEND_IMAGES_URL}/${photo}@2x.png 2x`}
            width="90"
            height="235"
            alt=""/>
          <div className="product-container__info-wrapper">
            <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
            <div className="rate product-container__rating">
              <StarRating
                rating={rating}
                size={14}>
                <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{commentsNumber}</p>
              </StarRating>
            </div>
            <div className="tabs">
              <button
                className={cn('button',
                  { 'button--black-border': tab !== Tab.Params },
                  'button--medium', 'tabs__button')}
                onClick={() => setTab(Tab.Params)}>

                Характеристики
              </button>
              <button
                className={cn('button',
                  { 'button--black-border': tab !== Tab.Description },
                  'button--medium', 'tabs__button')}
                onClick={() => setTab(Tab.Description)}>
                Описание
              </button>
              <div
                className="tabs__content"
                id="characteristics">
                <table className={cn('tabs__table', { 'hidden': tab !== Tab.Params })}>
                  <tbody>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Артикул:</td>
                    <td className="tabs__value">{code}</td>
                  </tr>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Тип:</td>
                    <td className="tabs__value">{type}</td>
                  </tr>
                  <tr className="tabs__table-row">
                    <td className="tabs__title">Количество струн:</td>
                    <td className="tabs__value">{stringsNumber} струнная</td>
                  </tr>
                  </tbody>
                </table>
                <p className={cn('tabs__product-description', { 'hidden': tab !== Tab.Description })}>{description}</p>
              </div>
            </div>
          </div>
          <div className="product-container__price-wrapper">
            <p className="product-container__price-info product-container__price-info--title">Цена:</p>
            <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
            <button
              className="button button--red button--big product-container__button"
            >Добавить в корзину
            </button>
          </div>
        </div>
        <CommentsList
          shopItem={shopItem}
          comments={comments}/>
      </div>
    </main>
  );
}

