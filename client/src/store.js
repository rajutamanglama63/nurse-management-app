import { configureStore } from "@reduxjs/toolkit";

import nurseReducer from "./reducers/nurseReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    auth: userReducer,
    nurse: nurseReducer,
  },
});

export default store;
