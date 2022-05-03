import { SET_VERSIONS } from "../constants";

const initialState = {
  versions: [],
};

export const sideReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_VERSIONS:
      return {
        ...state,
        versions: payload,
      };

    default:
      return state;
  }
};
