import {combineReducers, createStore, applyMiddleware} from 'redux'
import AuthReducer from './reducers/authReducer'
import ImageReducer from './reducers/imageReducer'
import UserReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    auth: AuthReducer,
    image: ImageReducer,
    user: UserReducer,
})

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk))

export default configureStore