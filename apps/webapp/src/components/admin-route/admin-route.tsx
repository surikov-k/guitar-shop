import { AppRoute, AuthStatus } from '../../constants';
import { Navigate, Outlet } from 'react-router-dom';

type AuthRouteProps = {
  authStatus: AuthStatus;
  children?: JSX.Element;
}

export function AdminRoute({ authStatus, children }: AuthRouteProps): JSX.Element {
  return (
    authStatus === AuthStatus.Admin
      ? children ? children : <Outlet/>
      : <Navigate to={AppRoute.Root}/>
  );
}
