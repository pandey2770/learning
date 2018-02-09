import { combineReducers } from 'redux';

const userReducer = (
  state = { user: null, showLogin: false, showSignUp: false },
  action
) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.data, showLogin: false };
    case 'LOGGEDIN_USER':
      return { ...state, user: action.data, showSignUp: false };
    case 'LOGOUT_USER':
      return { ...state, user: null };
    case 'SHOW_LOGIN':
      return { ...state, showSignUp: false, showLogin: true };
    case 'SHOW_SIGNUP':
      return { ...state, showSignUp: true, showLogin: false };
    case 'HIDE_LOGIN':
      return { ...state, showLogin: false, showSignUp: false };
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
  let commentId;
  switch (action.type) {
    case 'CART_DATA':
      console.log(action.data);
      return [...state, ...action.data];
    case 'ADD_TO_CART':
      console.log(action.newData);
      return [...state, action.newData];
    case 'REMOVE_TO_CART':
      console.log(state);
      commentId = action.newData;
      return [...state.filter(comment => comment.id !== commentId)];
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer
});
