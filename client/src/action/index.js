import axios from 'axios';

export const server = (history) => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/error');
    console.log(data)
    return dispatch(serverData(data));
  }
};


export const serverData = data => {
  return {
    type: 'SERVER',
    data
  };
};

export const loginUser = (username, password, history) => {
  return async function(dispatch) {
    await axios.post('/api/login', { username, password });
    history.push('/');
    return dispatch(loginUserDispatch({username}));
  }
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
    history.push('/login');
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

export const getUserDispatch = user => {
  return {
    type: 'LOGGEDIN_USER',
    user
  };
};

export const signUp = (history, username, password) => {
  return async function(dispatch) {console.log(username, password)
    await axios.post('/api/signUp', {username, password});
    history.push('/');
    return dispatch(getUserDispatch(username));
  }
};

export const updateData = (id, user) => {
  return async function(dispatch) {
    await axios.put(`/api/user/${id}`, {user});
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

// TODO: separate action for user and product