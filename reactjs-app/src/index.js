import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import PageFeeds from './pages/PageFeeds';
import Footer
  from './components/Footer';
import AdivinaComponent from './examples/AdivinaComponent';
import MutableComponent from './examples/MutableComponent';
import HookExample from './examples/HookExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdivinaComponent></AdivinaComponent>
    { /*
      <AdivinaComponent></AdivinaComponent>
      <MutableComponent></MutableComponent>
      <HookExample></HookExample>
      <Footer></Footer>
     */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
