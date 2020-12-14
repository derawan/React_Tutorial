import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



var myjsx = (
    <h1>Hello React JS asdfasdfsadf</h1>
);


function MyComp(attribute) {
  return (
    <h1>Komponen Fungsi {attribute.title}</h1>
  ) 
}


function mycomponen(props) {
     this.nama = "sdfsdff"
}


class MyComp2 extends Component {

  render() {
    return (
      <div>
        <h1 className="black">Komponen KElas {this.props.alamat}</h1>
        <MyComp title="judul"/>
        <h1>Komponen KElas</h1>
      </div>
      
    ) 
  }
}

// function onKeyUpValue(event)
// {
//    alert(1)
// }


var dataArray1 = [
    "data1", "data2", "data3"
]

var dataArray2 = [
  <li>Data 1</li>,
  <li>Data 2</li>,
  <li>Data 3</li>
]

function MyButton(props) {

    return (
        <div>
          <button onClick={props.click.bind(this)}>{props.title}</button>
          {dataArray1};
          <ul>
             {dataArray2}
          </ul>
          <input type="text"  onKeyUp={props.ditekan.bind(this)} />
        </div>
    )
}



ReactDOM.render(
  <React.StrictMode>
    {myjsx}
    <MyComp title="alfa"/>
    <MyComp2 alamat="bogor"/>
    <MyButton title="Clic Me" click={(e)=>{ console.log(e); alert('hallo di click')}}   ditekan={(e)=>{ alert(1)}}/>
    <MyButton title="Clic Rizky" click={(e)=>{ alert('rizki di click')}}  ditekan={(e)=>{ alert(1)}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

