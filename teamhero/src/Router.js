import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import UserContext from './store/UserContext';
import SearchPage from './pages/SearchPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';


function Router() {
  const ctxUser = useContext(UserContext);

  return (
      <Switch>
        <Route exact path='/' component={LoginPage} />
        {ctxUser.authenticated ? <Route exact path='/home' component={HomePage} /> : <Redirect to='/' />}
        {ctxUser.authenticated ? <Route exact path='/search' component={SearchPage} /> : <Redirect to='/' />}
      </Switch>
  );
}

export default Router;
