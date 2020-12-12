import {useState} from "react";


function Testing2() {
    const [counter, setCounter] = useState(5);
    return (
        <ul>
            <li>Penambahan sebanyak 5, <span onClick={()=>setCounter(counter+5)}>KLIK DISINI</span> {counter}</li>
        </ul>
    )
}

function Testing3() {
    const [counter, setCounter] = useState(10);
    return (
        <ul>
            <li>Penambahan sebanyak 10, <span onClick={()=>setCounter(counter+10)}>KLIK YANG INI</span> {counter}</li>
        </ul>
    )
}

export {Testing2, Testing3};