import {createStore, combineReducers} from 'redux'
import {mailReducer, siswaReducer} from './productReducer'

const mystore = createStore( combineReducers({mailReducer, siswaReducer}));


export default mystore;
