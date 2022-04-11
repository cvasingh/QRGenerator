import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Redirect from './Redirect';
import NotFounds from './NotFounds';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFounds/>} />
        <Route path='/QRGenerator/:index' element={<Redirect />} />
        <Route path='/QRGenerator/login' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);