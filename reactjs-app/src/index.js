import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import PageFeeds from './pages/PageFeeds';
import Footer from './components/Footer';
import AdivinaComponent from './examples/AdivinaComponent';
import MutableComponent from './examples/MutableComponent';
import HookExample from './examples/HookExample';
import { Ejercicio2 } from './pages/Ejercicio2';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Ejercicio2 />
  
    { /*
      <AdivinaComponent></AdivinaComponent>
      <MutableComponent></MutableComponent>
      <HookExample></HookExample>
     */}
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
