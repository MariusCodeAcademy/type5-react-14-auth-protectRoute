import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <h2>System</h2>
      <nav className='main-nav'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/vip'}>Vip</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/logout'}>Logout</NavLink>
      </nav>
    </header>
  );
}

export default Header;
