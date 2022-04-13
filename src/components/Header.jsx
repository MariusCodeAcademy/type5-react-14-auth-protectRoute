import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from './../store/authContext';

function Header() {
  const authCtx = useContext(AuthContext);
  // console.log('authCtx ===', authCtx);
  // istraukti authCtx su useContext
  // priklausomai nuo isUserLoggedIn rodom arba nerodom links
  // {salyga && navlink}

  function logoutHandler(e) {
    // e.preventDefault();
    authCtx.logout();
  }

  return (
    <header className='header'>
      <h2>System</h2>
      <nav className='main-nav'>
        {authCtx.isUserLoggedIn && <NavLink to={'/'}>Home</NavLink>}
        {authCtx.isUserLoggedIn && <NavLink to={'/vip'}>Vip</NavLink>}
        {!authCtx.isUserLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
        {authCtx.isUserLoggedIn && (
          <NavLink onClick={logoutHandler} to={'/login'}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
