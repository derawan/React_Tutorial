import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {PENDING,APPROVED, REJECTED, BANNED} from './Constant/Status';
import Draw from './Constant';
import * as status from './Constant/Status'



ReactDOM.render(
  <React.StrictMode>
     {status.APPROVED}
  <Draw nama="alfa" ItemClick={(e)=>{ console.log(e.target)}}/>

  </React.StrictMode>,
  document.getElementById('root')
);

