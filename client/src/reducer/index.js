import { combineReducers } from 'redux';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGGEDIN_USER':
      return action.user;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
};

const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCT':
      return action.products;
    case 'GET_PRODUCT':
      return [...state, action.product];
    default:
      return state;
  }
};

const buyReducer = (state = null, action) => {
  switch (action.type) {
    case 'ITEM':
      return action.id;
    case 'CLOSE':
      return null;
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'CART':
      return [...state, action.id];
    default:
      return [];
  }
};

export default combineReducers({
  user: userReducer,
  product: productReducer,
  buyLogin: buyReducer,
  cart: cartReducer,
});
