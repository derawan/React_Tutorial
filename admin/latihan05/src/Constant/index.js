import {Products} from './data'

const Draw = function(param) {


    return (
        <ul>
            {Products.map(item => (
                <li key={item.sku} onClick={param.ItemClick.bind(this)}>{item.nama}</li>
            )  )}
        </ul>
    )
}

export default Draw;