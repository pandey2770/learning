import axios from 'axios';

export const loginUser = (username, password) => {
  return async function(dispatch) {
    await axios.post('/api/login', { username, password });
    return dispatch(loginUserDispatch({ email: username }));
  };
};

export const loginUserDispatch = data => {
  return {
    type: 'LOGIN_USER',
    data
  };
};

export const logoutUser = history => {
  return async function(dispatch) {
    await axios.get('/api/logout');
    return dispatch(logoutUserDispatch());
  };
};

export const logoutUserDispatch = () => {
  return {
    type: 'LOGOUT_USER'
  };
};

export const getUser = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/user');
    return dispatch(getUserDispatch(data));
  };
};

export const getUserDispatch = data => {
  return {
    type: 'LOGGEDIN_USER',
    data
  };
};

export const signUp = (history, username, password) => {
  return async function(dispatch) {
    axios.post('/api/signUp', { username, password }).then(
      () => {
        return dispatch(getUserDispatch({ email: username }));
      },
      response => {
        // console.log(message);
      }
    );
  };
};

export const updateData = (id, user) => {
  return async function(dispatch) {
    await axios.put(`/api/user/${id}`, { user });
    return dispatch(updateDataDispatch(id, user));
  };
};

export const updateDataDispatch = (id, user) => {
  return {
    type: 'UPDATE_USER_DATA',
    id,
    user
  };
};

export const getAllProducts = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/product');
    return dispatch(getAllProductsDispatch(data));
  };
};

export const getAllProductsDispatch = products => {
  return {
    type: 'GET_ALL_PRODUCT',
    products
  };
};

export const getProduct = id => {
  return async function(dispatch) {
    const { data } = await axios.get(`/api/product/${id}`);
    return dispatch(getProductDispatch(data));
  };
};

export const getProductDispatch = product => {
  return {
    type: 'GET_PRODUCT',
    product
  };
};

export const addToCartData = (cartid, state) => {
  return async function(dispatch) {
    const { data } = await axios.post(`/api/cart/${cartid}`, { state });
    return dispatch(getCartDispatch(data));
  };
};

export const getCartDispatch = data => {
  return {
    type: 'ADD_TO_CART',
    data
  };
};

export const removeCart = id => {
  return async function(dispatch) {
    const { data } = await axios.delete(`/api/cartdelete/${id}`);
    return dispatch(removeCartData(data));
  };
};

export const removeCartData = data => {
  return {
    type: 'REMOVE_TO_CART',
    data
  };
};

export const getcartdetail = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/cartdetail');
    return dispatch(getCartispatch(data));
  };
};

export const getCartispatch = data => {
  return {
    type: 'CART_DATA',
    data
  };
};

export const showLogin = () => {
  return {
    type: 'SHOW_LOGIN'
  };
};

export const showSignUp = () => {
  return {
    type: 'SHOW_SIGNUP'
  };
};

export const hideLogin = () => {
  return {
    type: 'HIDE_LOGIN'
  };
};

// TODO: separate action for user and product
