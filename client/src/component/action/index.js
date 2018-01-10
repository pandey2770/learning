import axios from 'axios';

export const loginUser = (username, password, history) => {
  return async function(dispatch) {
    const login = axios.post('/api/login', { username, password }).then(
      ({ data }) => {
        history.push('/');
        return dispatch(loginUserDispatch(data));
      },
      () => {
        alert("Please don't force me enter the right Password or Email else ");
      }
    );
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


export const createSignUp = (signUp, history) => {
  console.log('check')
  return async function(dispatch) {
    console.log(dispatch,'1')
    const data = axios.get('/api/signUp').then(({ data }) => {
      console.log('data','2')
      history.push('/');
      return dispatch(getCreateSignUp(data));
    });
  };
};

export const getCreateSignUp = data => {
  return {
    type: 'LOGOUT_USER',
    data
  };
};
