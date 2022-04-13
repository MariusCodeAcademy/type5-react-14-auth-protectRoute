import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import VipPage from './pages/VipPage';
import AuthContext from './store/authContext';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function login() {
    console.log('App.js login');
  }
  function logout() {
    console.log('App.js logout');
  }

  const ctxValue = {
    isUserLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
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
    </AuthContext.Provider>
  );
}

export default App;
