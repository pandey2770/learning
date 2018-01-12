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

export const getCurrentUser = () => {
  return async function(dispatch) {
    const { data } = await axios.get('/api/currentuser');
    return dispatch(getcurrentUser(data));
  };
};

export const getcurrentUser = user => {
  return {
    type: 'CURRENT_USER',
    user
  };
};

export const signup = (history, username, password) => {
  return async function(dispatch) {
    const data = await axios.post('/api/signUp', { username, password });
    history.push('/');
    return dispatch(getsignup(data));
  };
};

export const getsignup = data => {
  return {
    type: 'CREATE_SIGNUP',
    data
  };
};

export const setting = (history, id ,name, number, address ) => {
  return async function(dispatch) {
    const data = await axios.put('/api/setting/${id}', { user :{history, id, name, number, address}});
    history.push('/setting');
    return dispatch(changeSetting(data));
  };
}

export const changeSetting = (data, id) => {
  return {
    type: 'CHANGE_SETTING',
    id,
    data
  };
} 