import { ADD_TO_CART, REMOVE_ALL, REMOVE_FROM_CART } from "../constants";

let initialState = {
  cart: [],
};

// reducer funcs

const addToCart = (state, action) => {
  const item = action.payload.book;

  const existItem = state.cart.find((x) => x.id === item.id);

  if (existItem) {
    return {
      ...state,
      cart: state.cart.map((x) => (x.id === existItem.id ? item : x)),
    };
  } else {
    return {
      ...state,
      cart: [...state.cart, { ...item }],
    };
  }
};

const removeFromCart = (state, action) => {
  return {
    ...state,
    cart: state.cart.filter((item) => item.id !== action.payload),
  };
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action);
    case REMOVE_FROM_CART:
      return removeFromCart(state, action);
    case REMOVE_ALL:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
