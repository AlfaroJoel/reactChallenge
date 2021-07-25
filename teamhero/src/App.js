import { useContext} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import UserContext from './store/UserContext'
import Header from './components/Layout/Header';
import HeroSearch from './pages/HeroSearch';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  const ctxUser = useContext(UserContext);

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LoginPage} />
        {ctxUser.authenticated ?
          <Route exact path='/home'>
            <Header />
            <HomePage />
          </Route> : <Redirect to='/' />}
        {ctxUser.authenticated  ?
          <Route exact path='/search'>
            <Header />
            <HeroSearch />
          </Route> : <Redirect to='/' />}
      </Switch>
    </div>
  );
}

export default App;
