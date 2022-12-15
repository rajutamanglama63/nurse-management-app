import { configureStore } from "@reduxjs/toolkit";
// import signinReducer from "./reducers/signinReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
  },
});

export default store;
