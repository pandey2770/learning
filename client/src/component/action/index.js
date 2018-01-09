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
