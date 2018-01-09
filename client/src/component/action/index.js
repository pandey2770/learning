import axios from 'axios';

export const loginUser = (username, password, history) => {
  return async function(dispatch) {
    const login = axios
      .post('/api/login', { username, password })
      .then(({ data }) => {
        history.push('/');
        return dispatch(loginUserDispatch(data));
      });
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
    const logout = axios.get('/api/logout').then(({ data }) => {
      history.push('/login');
      return dispatch(getLogoutDispatch(data));
    });
  };
};

export const getLogoutDispatch = data => {
  return {
    type: 'LOGOUT_USER',
    data
  };
};

export const currentUser = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/currentuser');
    return dispatch(getCurrentUser(data));
  };
};

export const getCurrentUser = user => {
  return {
    type: 'CURRENT_USER',
    user
  };
};
