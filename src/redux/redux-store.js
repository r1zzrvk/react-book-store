import { applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {bookReducer} from './reducers/book-reducer';
import thunkMiddleware from 'redux-thunk';
import { sideReducer } from './reducers/side-reducer';
import { cartReducer } from './reducers/cart-reducer';

let reducers = combineReducers({
 book: bookReducer,
 side: sideReducer,
 cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
window.store = store;