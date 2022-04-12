import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Redirect from './Redirect';
import NotFounds from './NotFounds';
import { data } from './data'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFounds />} />
        <Route path='/QRGenerator' element={<App />} />
        {/* <Route path='/QRGenerator/#0' element={<Redirect index={0} />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);