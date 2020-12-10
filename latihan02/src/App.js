/*
   Tutorial REACT BAGIAN 02
*/
import logo from './logo.svg';
import './App.css';

function App() {

  /* How We Define A variable */
  var varNumber = 100;
  var varTeks   = `Hello this is just a teks and we have value from varNumber = ${varNumber}`;
  // array in a variable
  var myArray1 = ["Data 1", "Data 2", "Data 3"]
  // array of object 
  var myArray2  = [
    {id:1, name:'some 1'},
    {id:2, name:'some 2'},
    {id:3, name:'some 3'},
  ]



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       This is how we use our variable on JSX {varTeks}  
       <hr/>
       This is how we use simple array on JSX {myArray1}
       <hr/>
       <code>{"{myArray2}"}</code>
       You can't use an array of object directly in this so you have to create a function or use a function
       This is how we use object array on JSX {myArray2.map(item => item.name )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
