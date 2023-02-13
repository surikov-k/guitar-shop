import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { shopItemsMock } from '../../mocks/shop-items.mock';
import { GuitarType } from '@guitar-shop/shared-types';

const emptyShopItem = {
  code: null,
  description: null,
  name: null,
  photo: null,
  price: null,
  stringsNumber: null,
  type: null,
  addedAt: null,
};

export function AddItem() {
  const { id } = useParams();
  const shopItemId = parseInt(id as string, 10);

  if (isNaN(shopItemId) && id !== undefined) {
    return <Navigate to={AppRoute.Root} />;
  }

  let shopItem;

  if (id === undefined) {
    shopItem = emptyShopItem;
  } else {
    shopItem = shopItemsMock.find(({ id }) => id === shopItemId);
    if (!shopItem) {
      return <Navigate to={AppRoute.Root} />;
    }
  }

  const {
    code,
    description,
    name,
    photo,
    price,
    stringsNumber,
    type,
    addedAt,
  } = shopItem;

  const date = addedAt ? new Date(addedAt) : null;

  return (
    <main className="page-content">
      <Helmet>
        <title>{`${name ? `Редактирование ${name}` : 'Добавление товара'} — Guitar-shop`}</title>
        <meta name="description" content="Guitar-shop — описание" />
      </Helmet>
      <section className="add-item">
        <div className="container">
          <h1 className="add-item__title">{name ? name : 'Новый товар'}</h1>
          <ul className="breadcrumbs">
            <li className="breadcrumbs__item">
              <a className="link" href="./main.html">
                Каталог
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link" href="./main.html">
                Товары
              </a>
            </li>
            <li className="breadcrumbs__item">
              <a className="link">Новый товар</a>
            </li>
          </ul>
          <form className="add-item__form" action="#" method="get">
            <div className="add-item__form-left">
              <div className="edit-item-image add-item__form-image">
                <div className="edit-item-image__image-wrap">
                  {photo ? (
                    <img
                      className="edit-item-image__image"
                      src={`assets/img/content/${photo}`}
                      srcSet={`img/content/add-item-1@2x.png 2x`}
                      width="133"
                      height="332"
                      alt="СURT Z30 Plus"
                    />
                  ) : (
                    ''
                  )}
                </div>
                <div className="edit-item-image__btn-wrap">
                  <button className="button button--small button--black-border edit-item-image__btn">
                    Добавить
                  </button>
                  <button className="button button--small button--black-border edit-item-image__btn">
                    Удалить
                  </button>
                </div>
              </div>
              <div className="input-radio add-item__form-radio">
                <span>Выберите тип товара</span>
                <input
                  type="radio"
                  id="guitar"
                  name="item-type"
                  value="guitar"
                  checked={type ? type === GuitarType.Acoustic: false}
                />
                <label htmlFor="guitar">Акустическая гитара</label>
                <input
                  type="radio"
                  id="el-guitar"
                  name="item-type"
                  value="el-guitar"
                  checked={type ? type === GuitarType.Electric: false}
                />
                <label htmlFor="el-guitar">Электрогитара</label>
                <input
                  type="radio"
                  id="ukulele"
                  name="item-type"
                  value="ukulele"
                  checked={type ? type === GuitarType.Ukulele: false}
                />
                <label htmlFor="ukulele">Укулеле</label>
              </div>
              <div className="input-radio add-item__form-radio">
                <span>Количество струн</span>
                <input
                  type="radio"
                  id="string-qty-4"
                  name="string-qty"
                  value="4"
                  checked={stringsNumber ? stringsNumber === 4: false}
                />
                <label htmlFor="string-qty-4">4</label>
                <input
                  type="radio"
                  id="string-qty-6"
                  name="string-qty"
                  value="6"
                  checked={stringsNumber ? stringsNumber === 6: false}
                />
                <label htmlFor="string-qty-6">6</label>
                <input
                  type="radio"
                  id="string-qty-7"
                  name="string-qty"
                  value="7"
                  checked={stringsNumber ? stringsNumber === 7: false}
                />
                <label htmlFor="string-qty-7">7</label>
                <input
                  type="radio"
                  id="string-qty-12"
                  name="string-qty"
                  value="12"
                  checked={stringsNumber ? stringsNumber === 12: false}
                />
                <label htmlFor="string-qty-12">12</label>
              </div>
            </div>
            <div className="add-item__form-right">
              <div className="custom-input add-item__form-input">
                <label>
                  <span>Дата добавления товара</span>
                  <input
                    type="text"
                    name="date"
                    defaultValue={
                      date ? new Intl.DateTimeFormat('ru-RU').format(date) : ''
                    }
                    placeholder="Дата в формате 00.00.0000"
                    readOnly
                  />
                </label>
                <p>Заполните поле</p>
              </div>
              <div className="custom-input add-item__form-input">
                <label>
                  <span>Введите наименование товара</span>
                  <input
                    type="text"
                    name="title"
                    defaultValue={name ? name : ''}
                    placeholder="Наименование"
                  />
                </label>
                <p>Заполните поле</p>
              </div>
              <div className="custom-input add-item__form-input add-item__form-input--price is-placeholder">
                <label>
                  <span>Введите цену товара</span>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price ? price : ''}
                    placeholder="Цена в формате 00 000"
                  />
                </label>
                <p>Заполните поле</p>
              </div>
              <div className="custom-input add-item__form-input">
                <label>
                  <span>Введите артикул товара</span>
                  <input
                    type="text"
                    name="sku"
                    defaultValue={code ? code : ''}
                    placeholder="Артикул товара"
                  />
                </label>
                <p>Заполните поле</p>
              </div>
              <div className="custom-textarea add-item__form-textarea">
                <label>
                  <span>Введите описание товара</span>
                  <textarea
                    name="description"
                    placeholder=""
                    defaultValue={description ? description : ''}
                  ></textarea>
                </label>
                <p>Заполните поле</p>
              </div>
            </div>
            <div className="add-item__form-buttons-wrap">
              <button
                className="button button--small add-item__form-button"
                type="submit"
              >
                Сохранить изменения
              </button>
              <Link
                to={AppRoute.Admin}
                className="button button--small add-item__form-button"
                type="button"
              >
                Вернуться к списку товаров
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
