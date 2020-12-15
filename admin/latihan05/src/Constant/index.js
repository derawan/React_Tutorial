import {Products} from './data'

const Draw = function(param) {


    return (
        <div>
        <ul>
            {Products.map(item => (
                <li key={item.sku} onClick={param.ItemClick.bind(this)}>{item.nama}</li>
            )  )}
        </ul>
        <table>
           
           { Products.map(item => ( <tr><td>{item.sku}</td><td>{item.nama}</td></tr>)) }
           
        </table>
        <ol>
            {Products.map(item => (
                <li key={item.sku} onClick={param.ItemClick.bind(this)}>{item.nama}</li>
            )  )}
        </ol>
        </div>
    )
}

export default Draw;