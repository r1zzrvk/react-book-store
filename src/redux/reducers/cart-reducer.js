import { ADD_TO_CART, REMOVE_ALL, REMOVE_FROM_CART } from "../constants";

const initialState = {
  cart:[],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload.book;

      const existItem = state.cart.find((x) => x.id === item.id);

      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === existItem.id ? item : x),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...item }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case REMOVE_ALL:
      return {
        ...state,
        cart: []
      };
    default:
      return state
  };
};
