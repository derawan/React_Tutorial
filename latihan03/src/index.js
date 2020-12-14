import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App,Test, myname as myvar} from './App';
import {person, Orang,Food, Testing, MyComponent} from './myobject1';
import {MyComponent as Compo1, MyComponent2} from './myobject2';
import reportWebVitals from './reportWebVitals';


let mypeople = new Orang("nindya");
let makanan = new Food("nasi goreng");

ReactDOM.render(
  <React.StrictMode>
    <App id="ausmick"  name="ika" /> {myvar}
    {person.name}
<hr/>
    {mypeople.name + ' ' + mypeople.type}
    <hr/>
    {makanan.Makan()}

    <Testing/>
    <MyComponent/>

    <Compo1 hallo="rizky"></Compo1>
    <MyComponent2 nama="nabila"></MyComponent2>

    <Testing/>
    <MyComponent2 nama="gleen"></MyComponent2>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
