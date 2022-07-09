import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom';

import { ROUTE } from '@src/constants';
import HomePage from '@src/pages/Home';
import RegisterPage from '@src/pages/Register';
import LoginPage from '@src/pages/Login';
import NotFoundPage from '@src/pages/NotFound';
import ProfilePage from '@src/pages/Profile';

const routes: RouteObject[] = [
  { path: ROUTE.LOGIN, element: <LoginPage /> },
  { path: ROUTE.REGISTER, element: <RegisterPage /> },
  { path: ROUTE.PROFILE, element: <ProfilePage /> },
  { path: ROUTE.HOME, element: <HomePage /> },
  { path: ROUTE.NOT_FOUND, element: <NotFoundPage /> },
];

const Content = () => useRoutes(routes);

export default () => {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
};
