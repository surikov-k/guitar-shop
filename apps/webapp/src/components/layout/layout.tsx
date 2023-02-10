import { Fragment } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

function Layout(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default Layout;
