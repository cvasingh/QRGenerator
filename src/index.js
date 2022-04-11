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
        <Route path='*' element={<NotFounds/>} />
        <Route path='/QRGenerator' element={<App />} />

        {data.map((item,index)=>{
          return <Route path={`/QRGenerator/${index}`} element={<Redirect index={index} link={item}/>} />
        })}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);