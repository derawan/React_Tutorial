import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {trythis, Latihan, App} from './App';
import {Testing1, TryingComponent} from './nindyakin1';
import {Testing2, Testing3} from './nindyakin2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {trythis}
    <hr/>
    <Latihan />
    <hr/>
    <App nama="nindya kinanti" dom="jakarta" hobby="membaca" />
    <hr/>
    <App nama="dwita" dom="bekasi" hobby="berenang" />
    <hr/>
    <TryingComponent />
    <hr/>
    <Testing1 />
    <Testing2 />
    <Testing3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
