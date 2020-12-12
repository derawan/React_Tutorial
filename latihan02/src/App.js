import React from 'react';

let trythis = "Hai saya sedang belajar.";

function Latihan() {
    return (
      <div>Hari ini Nindya latihan React.</div>
    )
}

function App(iniatribut) {
   return (
     <React.Fragment>
        <div>
          <h1>Percobaan pertama</h1>
          <p>Data 1 {iniatribut.id}</p>
        </div>
        <div>
          <h1>Percobaan pertama</h1>
          <p>Data 1 {iniatribut.id}</p>
        </div>
        <div>
          <h1>Percobaan pertama</h1>
          <p>Data 1 {iniatribut.id}</p>
        </div>
     </React.Fragment>
      
   );
}

//export default App;
export {trythis, Latihan, App}