import { Component as bebe, useState } from "react";


let person = {
    id:"1001",
    name:"angel"
}

// definisi kelas by constructor function
function Orang(nama)
{
    this.name = nama;
    this.type = "orang";

}


class Food 
{
    constructor (tipe)
    {
        this.Type = tipe;
    }

    Makan() {
        return this.Type;
    }


}


function Testing() {
    const [counter, setCounter] = useState(0);
    return (
        <ul>
            <li>data data data 1</li>
            <li onClick={()=>setCounter(counter+1)}>state fungsi {counter}</li>
            <li>data data data  {counter}</li>
            <li>data data data  {counter}</li>
            <li>data data data  {counter}</li>
            <li>data data data  {counter}</li>
            <li>data data data  {counter}</li>
        </ul>
    )
}

class MyComponent extends bebe {

    render() {
        return (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum perspiciatis quia optio esse voluptates veniam cumque quo? Suscipit perspiciatis molestiae atque neque dolor asperiores facere beatae magnam impedit repellat?</p>
        )
    }
}


export {person, Orang, Food, Testing, MyComponent}