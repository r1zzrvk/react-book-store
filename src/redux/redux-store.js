import { applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {bookReducer} from './book-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
 book: bookReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;
window.store = store;