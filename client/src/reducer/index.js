import { combineReducers } from 'redux';

const userReducer = (state = {user: null, showLogin: false, showSignUp:false}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, user: action.data, showLogin: false};
    case 'LOGGEDIN_USER':
      return {...state, user: action.data};
    case 'LOGOUT_USER':
      return {...state, user: null};
    case 'SHOW_LOGIN':
    return {...state,showSignUp: false, showLogin: true};
    case 'SHOW_SIGNUP':
      return {...state, showSignUp: true};
    case 'HIDE_LOGIN':
      return {...state, showLogin: false, showSignUp: false};
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
  cart: cartReducer,
});
