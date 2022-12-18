import { createSlice } from "@reduxjs/toolkit";

import services from "../services/users";

const userSlice = createSlice({
  name: "user",
  initialState: {
    msg: "",
    user: {},
  },
  reducers: {
    setUserSignup(state, action) {
      const responseData = action.payload;

      return typeof responseData === "string"
        ? { ...state, msg: responseData, user: {} }
        : { ...state, msg: "", user: responseData.newUser };
    },
    setUserSignin(state, action) {
      const responseData = action.payload;

      return typeof responseData === "string"
        ? { ...state, msg: responseData, user: {} }
        : { ...state, msg: "", user: responseData };
    },
    setRefreshToken(state, action) {
      const responseData = action.payload;

      return typeof responseData === "string"
        ? { ...state, msg: responseData, user: {} }
        : { ...state, msg: "", user: responseData };
    },
    setUserLogout(state, action) {
      return { ...state, msg: "", user: {} };
    },
  },
});

export const { setUserSignup, setUserSignin, setRefreshToken, setUserLogout } =
  userSlice.actions;

export const userSignup = (data) => {
  return async (dispatch) => {
    const user = await services.userSignup(data);

    dispatch(setUserSignup(user));
  };
};

export const userSignin = (email, password) => {
  return async (dispatch) => {
    const resultData = await services.userSignin({ email, password });
    // console.log(resultData);
    window.localStorage.setItem("loggedInUser", JSON.stringify(resultData));

    dispatch(setUserSignin(resultData));
  };
};

export const refreshToken = (refresh_token) => {
  return async (dispatch) => {
    const resultData = await services.refreshTheToken(refresh_token);

    window.localStorage.setItem("loggedInUser", JSON.stringify(resultData));

    dispatch(setRefreshToken(resultData));
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    dispatch(setUserLogout());
  };
};

export default userSlice.reducer;
