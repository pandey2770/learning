import { combineReducers } from 'redux';

const userReducer = (state = {user: null, showLogin: false, showSignUp:false}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, user: action.data, showLogin: false};
    case 'LOGGEDIN_USER':
      return {...state, user: action.data, showSignUp: false};
    case 'LOGOUT_USER':
      return {...state, user: null};
    case 'SHOW_LOGIN':
    return {...state,showSignUp: false, showLogin: true};
    case 'SHOW_SIGNUP':
      return {...state, showSignUp: true, showLogin: false};
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
  let index;
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.id];
    case 'REMOVE_TO_CART':console.log(...state.slice(action.id))
      index = state.findIndex(cart => cart.id === action.id);
      state.splice(index);
      console.log(...state,'inreducer')
      return [...state];
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
});
