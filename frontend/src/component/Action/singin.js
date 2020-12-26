import * as api from './api/index';
//////

export const loginRes = (user) => async (dispatch) => {
    try {
      const { data } = await api.loginRes(user);
         localStorage.setItem("theToken", data);
         console.log(data.theToken)
         window.location.assign("/");





      dispatch({ type:'FETCH_USER', payload: data });

    } catch (error) {
      console.log(error.message);
    }
  };