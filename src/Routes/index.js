import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout';
import PublicLayout from '../layouts/PublicLayout';
import { isLogin } from '../utils';

export const DashboardLayout = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <PrivateLayout>
      <Component {...rest} />
    </PrivateLayout>
  );
};

export const DefaultLayout = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <PublicLayout>
      <Component {...rest} />
    </PublicLayout>
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <DashboardLayout {...props} component={Component} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        true ? (
          <Redirect to='/' />
        ) : (
          <DefaultLayout component={Component} {...props} />
        )
      }
    />
  );
};
