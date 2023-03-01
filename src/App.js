import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import Room from './pages/Room'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LoginPage /> }/>
          <Route path={`/room/:id`} element={ <Room /> } /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
