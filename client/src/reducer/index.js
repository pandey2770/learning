import { combineReducers } from 'redux';

const userReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.data };
    case 'LOGGEDIN_USER':
      return { ...state, user: action.data };
    case 'LOGOUT_USER':
      return { ...state, user: null };
    case 'SHOW_LOGIN':
      return { ...state };
    case 'SHOW_SIGNUP':
      return { ...state };
    case 'HIDE':
      return { ...state };
    default:
      return state;
  }
};

const popUp = (
  state = { showConfirm: false, showLogin: false, showSignUp: false },
  action
) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, showLogin: false };
    case 'LOGGEDIN_USER':
      return { ...state, showSignUp: false };
    case 'SHOW_LOGIN':
      return { ...state, showLogin: true };
    case 'SHOW_SIGNUP':
      return { ...state, showSignUp: true };
    case 'CONFIRM':
      return { ...state, showConfirm: true };
    case 'HIDE':
      return {
        ...state,
        showConfirm: false,
        showLogin: false,
        showSignUp: false
      };
    default:
      return state;
  }
};

const productReducer = (state = [0], action) => {
  switch (action.type) {
    case 'GET_ALL_PRODUCT':
      return action.products;
    case 'GET_PRODUCT':
      return [...state, action.product];
    default:
      return state;
  }
};

const cartReducer = (state = [], action) => {
  let index;
  switch (action.type) {
    case 'CART_DATA':
      return [...state, ...action.data];
    case 'ADD_TO_CART':
      return [...state, action.newData];
    case 'REMOVE_TO_CART':
      index = state.findIndex(product => product.id === action.newData);
      state.splice(index, 1);
      return [...state];
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  popUp: popUp
});
