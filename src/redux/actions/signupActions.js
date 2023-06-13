import axios from "axios";
import { loginUserSuccess } from "./loginActions";
export const signupUser = (email, password) => {
  return function (dispatch) {
    dispatch(signupUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https:identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBcco48bRaNlYeKHY5gGdmDj7kK0Bk05B8",
        data
      )
      .then((result) => {
        dispatch(signupUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(signupUserError(err));
      });
  };
};

export const signupUserStart = () => {
  return {
    type: "SIGNUP_USER_START",
  };
};

export const signupUserSuccess = (data) => {
  return {
    type: "SIGNUP_USER_SUCCESS",
    data,
  };
};

export const signupUserError = (error) => {
  return {
    type: "SIGNUP_USER_ERROR",
    error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireDate");
  localStorage.removeItem("refreshToken");
  return {
    type: "LOGOUT",
  };
};

export const autoLogout = (ms) => {
  return function (dispatch) {
    // axios
    //   .post(
    //     "https://securetoken.googleapis.com/v1/token?key={AIzaSyBcco48bRaNlYeKHY5gGdmDj7kK0Bk05B8",
    //     {
    //       grant_type: "refresh_token",
    //       refresh_token: localStorage.get("refresh_token"),
    //     }
    //   )
    //   .then((result) => {
    //     const token = result.data.id_token;
    //     const userId = result.data.user_id;
    //     dispatch(loginUserSuccess(token, userId));
    //   })
    //   .catch((err) => {
    //     dispatch(signupUserError(err));
    //   });

    setTimeout(() => {
      dispatch(logout());
    }, ms);
  };
};
