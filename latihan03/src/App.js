import React from 'react';


let myname = "angelene";

function Test() {
    return (
      <div>Hallo Bro</div>
    )
}

function App(attr) {
   return (
     <React.Fragment>
        <div>Data 1 {attr.id}</div>
        <div>Data 2 {attr.name}</div>
     </React.Fragment>
      
   );
}

//export default App;
export {App, Test, myname}