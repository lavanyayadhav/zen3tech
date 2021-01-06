import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import imagesReducer from '../reducers/imagesReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        pic: imagesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore