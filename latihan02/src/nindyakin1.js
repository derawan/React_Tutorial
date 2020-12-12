import {Component as TryCompo1, useState} from "react";

function Testing1() {
    const [counter, setCounter] = useState(0);
    return (
        <ul>
            <li>Penambahan sebanyak 1, <span onClick={()=>setCounter(counter+1)}>KLIK INI</span> {counter}</li>
        </ul>
    )
}

class TryingComponent extends TryCompo1 {
    render() {
        return (
            <p>Percobaan kalimat dengan menggunakan class component.</p>
        );
    }
}

export {Testing1, TryingComponent};