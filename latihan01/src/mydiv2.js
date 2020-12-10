import {Component} from 'react';

function Test()
{
    alert('hallo')
}


function BuatParagraph(prop)
{

    return (
        <p onClick={Test}>
            {prop.nama}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non sit aperiam pariatur quis totam nihil quas impedit saepe repellendus, distinctio voluptatibus consectetur vel ipsa quibusdam sequi soluta blanditiis perspiciatis corporis.
        </p>
    )


}

class MyClass extends Component {

    // constructor (props) {
    //     super(props);
    // }
    render() {
        return (
        <div>alfa = {this.props.name}</div>
        )
    }
}

export {BuatParagraph,MyClass};