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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

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
          <ProtectedRoute path='/'>
            <h1>Home11</h1>
          </ProtectedRoute>
          {/* <Route path={'/'} exact>
            {isUserLoggedIn ? <h1>Home</h1> : <NotLoggedIn />}
          </Route> */}
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
