import logo from './logo.svg';
import './App.css';
import {variableku, dodol} from './myvar';
import {variableku as myvar} from './mydiv';
import {BuatParagraph, MyClass} from './mydiv2';
// export  {variableku, dodol} from ....
var punya_nindya = "goban"

function App() {

  var myvariable  = "this is my variable";
  var myarray = [1,2,3,4,5]
  var products = [
    {sku:'001', nama:'produk 001', warna:'red', price:3000 },
    {sku:'002', nama:'produk 002', warna:'gray', price:1000 },
    {sku:'003', nama:'produk 003', warna:'red', price:2000 },
    {sku:'004', nama:'produk 004', warna:'gray', price:5000 },
    {sku:'005', nama:'produk 005', warna:'red', price:3500 },
    {sku:'006', nama:'produk 006', warna:'green', price:400 }
    ];

  var myparagraph = (
    <p>hallo bro</p>
  );
cd 
  return (
    <div>
      Hallo Bro Welcome To The Jungle !!!! {myvariable}
      <MyClass/>
      <span>{myarray}</span>
      <hr/>
      <span>{myarray[1]}</span>
      <hr/>
      <span>{products[0].sku}</span>
      <hr/>
      <span>{products.map( product => product.nama)}</span>
      <hr/>
      {myparagraph}
      <hr/>
      {punya_nindya}
      <hr/>
      {variableku}
      <hr/>
      {dodol}
      <hr/>
      {myvar}
      <hr/>
      <BuatParagraph nama="irfan"/>
      <hr/>
      <span>{products.map( product => (<BuatParagraph nama={product.nama}></BuatParagraph>) )}</span>
    </div>
  );
}

export default App;
