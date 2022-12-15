// import { createSlice } from "@reduxjs/toolkit";

// import services from "../services/users";

// const signinSlice = createSlice({
//   name: "signin",
//   initialState: {
//     msg: "",
//     user: {},
//   },
//   reducers: {
//     setUserSignin(state, action) {
//       const responseData = action.payload;
//       console.log(typeof responseData === "string");
//       return typeof responseData === "string"
//         ? { ...state, msg: responseData, user: {} }
//         : { ...state, msg: "", user: responseData };
//     },
//     setUserLogout(state, action) {
//       return { ...state, msg: "", user: {} };
//     },
//   },
// });

// export const { setUserSignin, setUserLogout } = signinSlice.actions;

// export const userSignin = (email, password) => {
//   return async (dispatch) => {
//     const resultData = await services.userSignin({ email, password });
//     // console.log(resultData);
//     window.localStorage.setItem("loggedInUser", JSON.stringify(resultData));

//     dispatch(setUserSignin(resultData));
//   };
// };

// export const userLogout = () => {
//   return async (dispatch) => {
//     dispatch(setUserLogout());
//   };
// };

// export default signinSlice.reducer;
