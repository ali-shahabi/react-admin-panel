import './App.css';
import { Switch, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Tracks from './pages/Tracks';
import Artists from './pages/Artists';
import Login from './pages/Login';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import { DefaultLayout, PrivateRoute, PublicRoute } from './Routes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={false}
            component={Login}
            path='/login'
            exact
          />
          <PrivateRoute component={Dashboard} path='/' exact />
          <PrivateRoute component={Artists} path='/artists' exact />
          <PrivateRoute component={Tracks} path='/tracks' exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
