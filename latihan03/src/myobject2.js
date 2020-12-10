import { Component as bobo, useState } from "react";


function MyComponent(propt) {

    return (
        <span>{propt.hallo}</span>
    );

}

// var counter = 0;
// var setCounter = null;

class MyComponent2 extends bobo {

    constructor (props)
    {
        super(props);

        this.state = {
            counter:0,
            data:0
        }

        this.myval = {
           
        }

        this.x = 1;
        //this.counter = 0;
        // counter = 0;

        //[counter, setCounter] = useState(0);
    }

    TekanSaya(e) {
        //props.nama = "irfan"
        //setCounter(counter + 1);
        // this.counter = this.counter+1;
        // counter = counter +1; 
        // alert(counter)
    }
    render() {
        return (
            <ul>
                <li onClick={()=>this.setState({counter:this.state.counter + 1})}>Abe {this.props.nama}</li>
                <li>Abo {this.state.counter}</li>
                <li  onClick={()=>this.setState({data:this.state.data + 1})}>Abu {this.state.data}</li>
                <li  onClick={()=>{this.props.nama = "irfan"}}> {this.state.data * 10} </li>
                <li  onClick={()=>{this.x = this.x + 1;}}> xxxxx{this.x} </li>
                <li  onClick={()=>{alert(this.x)}}> yyyyy {this.x} </li>
            </ul>  
        );
    }
}

export {MyComponent, MyComponent2}