import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotLoggedIn from './components/UI/NotLoggedIn';
import LoginPage from './pages/LoginPage';
import VipPage from './pages/VipPage';
import AuthContext from './store/authContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function login() {
    console.log('App.js login');
    setIsUserLoggedIn(true);
  }
  function logout() {
    console.log('App.js logout');
    setIsUserLoggedIn(false);
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
          <ProtectedRoute path='/' exact className={'yes'} bubble='gum'>
            <h1>Home</h1>
            <p>Welcome</p>
          </ProtectedRoute>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <ProtectedRoute path={'/vip'}>
            <VipPage />
          </ProtectedRoute>
          <Route path={'*'}>
            <h2>Page not found</h2>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
