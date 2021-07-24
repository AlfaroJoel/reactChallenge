import { Route, Switch } from 'react-router-dom'
import Header from './components/Layout/Header';
import HeroSearch from './pages/HeroSearch';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          <LoginPage/>
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route exact path='/search'>
          <HeroSearch />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
