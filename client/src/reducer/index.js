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
  let commentId;
  let index;
  switch (action.type) {
    case 'CART_DATA':
      // if(index = state.find(cartReducer => cartReducer.id === action.data.productid)){
      //   state.splice(index, 1);
      //   return [...state]
      // };
      return [...state, action.data.productid]
    case 'ADD_TO_CART':
      return [...state, action.cart];
    case 'REMOVE_TO_CART':
      commentId = action.id;
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

