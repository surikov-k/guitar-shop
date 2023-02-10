import { Link } from 'react-router-dom';

type LogoLocation = 'header' | 'footer';

type LogoProps = {
  noClick?: boolean;
  location?: LogoLocation;
};

const getLogoStyle = (location: LogoLocation): string => {
  const logoStyle = {
    header: 'header__logo logo',
    footer: 'footer__logo logo',
  };
  return logoStyle[location];
};

function Logo({ noClick, location = 'header' }: LogoProps): JSX.Element {
  console.log(noClick);
  const logoStyle = getLogoStyle(location);
  if (noClick) {
    return (
      <a className={logoStyle}>
        <img
          className="logo__img"
          src="assets/img/svg/logo.svg"
          width="70"
          height="70"
          alt="Логотип"
        />
      </a>
    );
  }
  return (
    <Link className="header__logo logo" to="/">
      <img
        className="logo__img"
        src="assets/img/svg/logo.svg"
        width="70"
        height="70"
        alt="Логотип"
      />
    </Link>
  );
}

export default Logo;
