import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route path={'/'} exact>
        <h1>Home</h1>
      </Route>
      <Route path={'/login'}>
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
