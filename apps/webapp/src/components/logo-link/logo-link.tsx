import cn from 'classnames';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRoute } from '../../constants';
import Logo from '../logo/logo';

type LogoProps = {
  inFooter?: boolean,
};

function LogoLink({ inFooter = false }: LogoProps): JSX.Element {
  const [isRoot, setIsRoot] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setIsRoot(location.pathname === AppRoute.Root)
  }, [location.pathname])

  const logoType = inFooter ? 'footer' : 'header';
  const logoStyle = cn({
    [`${logoType}__logo`]: true,
  }, 'logo');

  return (
    isRoot
      ? <div className={logoStyle}><Logo/></div>
      : <Link
        className={logoStyle}
        to="/"><Logo/></Link>
  );
}

export default LogoLink;
