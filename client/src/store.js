import { configureStore } from "@reduxjs/toolkit";
import { userSignin, userSignup } from "./reducers/userReducer";
import users from "./services/users";

const store = configureStore({
  reducer: {
    signup: userSignup,
    signin: userSignin,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
});

export default store;
