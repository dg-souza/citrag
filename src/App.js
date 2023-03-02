import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import Room from './pages/Room'

import io from 'socket.io-client'

function App() {
  const socket = io.connect('http://localhost:3001');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <LoginPage socket={socket} /> }/>
          <Route path={`/room/:id`} element={ <Room socket={socket} /> } /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
