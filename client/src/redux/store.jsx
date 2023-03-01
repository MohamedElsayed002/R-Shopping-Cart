import {createStore , applyMiddleware , compose} from 'redux'
import reducer from './reducer'
import reduxThunk from 'redux-thunk'


const initState = {}

const store = createStore(reducer, applyMiddleware(reduxThunk))

export default store