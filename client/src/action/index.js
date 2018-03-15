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

export const getUserDispatch = data => {
  return {
    type: 'LOGGEDIN_USER',
    data
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

export const addToCartData = (productid, state) => {
  return async function(dispatch) {
    const { data } = await axios.post(`/api/cart/${productid}`, { state });
    const newData = { id: data, productid, state };
    return dispatch(getCartDispatch(newData));
  };
};

export const getCartDispatch = newData => {
  return {
    type: 'ADD_TO_CART',
    newData
  };
};

export const removeCart = productid => {
  return async function(dispatch) {
    const { data } = await axios.delete(`/api/cartdelete/${productid}`);
    const newData = { id: data, productid };
    return dispatch(removeCartData(newData));
  };
};

export const removeCartData = newData => {
  return {
    type: 'REMOVE_TO_CART',
    newData
  };
};

export const cashOrder = state => {
  return async function(dispatch) {
    const { data } = await axios.put('/api/order', { state });
    const newData = { id: data, state };
    return dispatch(order(newData));
  };
};

export const order = newData => {
  return {
    type: 'CASH_ORDER',
    newData
  };
};

export const getAllOrder = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/orderdata');
    return dispatch(getOrderDispatch(data));
  };
};

export const getOrderDispatch = data => {
  return {
    type: 'ORDER_DATA',
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

export const hide = () => {
  return {
    type: 'HIDE'
  };
};

export const confirm = data => {
  return {
    type: 'CONFIRM',
    data
  };
};

// TODO: separate action for user and product
