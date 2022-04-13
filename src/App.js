import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import VipPage from './pages/VipPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path={'/'} exact>
          <h1>Home</h1>
        </Route>
        <Route path={'/login'}>
          <LoginPage />
        </Route>
        <Route path={'/vip'}>
          <VipPage />
        </Route>
        <Route path={'*'}>
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
