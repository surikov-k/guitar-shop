import { Helmet } from 'react-helmet';

export function NotFound() {
  return (
    <main className="page-content">
      <Helmet>
        <title>404 — Guitar-shop</title>
        <meta name="description" content="Guitar-shop — описание"/>
      </Helmet>
      <div className="container">
        <section className="error">
          <h1 className="error__title">404</h1><span className="error__subtitle">Страница не найдена.</span>
          <p className="error__text"> Возможно, страница была удалена или<br/>её вовсе не существовало.</p>
          <button className="button button__error button--small button--black-border">Продолжить покупки</button>
        </section>
      </div>
    </main>
  );
}

