import { createSlice } from "@reduxjs/toolkit";

import services from "../services/nurses";
import { setDataInLocalStorage } from "../utils/reuseableFunc";

const nurseSlice = createSlice({
  name: "nurse",
  initialState: {
    msg: "",
    nurses: [],
    nurseDetail: {},
  },
  reducers: {
    setNurse(state, action) {
      const responseData = action.payload;

      return typeof responseData === "string"
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : { ...state, msg: "", nurses: responseData, nurseDetail: {} };
    },
    setNurseDetail(state, action) {
      const responseData = action.payload;
      console.log(responseData);
      return typeof responseData === "string"
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : { ...state, msg: "", nurses: [], nurseDetail: responseData };
    },
  },
});

export const { setNurse, setNurseDetail } = nurseSlice.actions;

export const getAllNurses = () => {
  return async (dispatch) => {
    const resultData = await services.nurseList();

    dispatch(setNurse(resultData));
  };
};

export const getNurseDetail = (nurseId) => {
  console.log("nurse-detail");
  return async (dispatch) => {
    const resultData = await services.singleNurse(nurseId);
    const stringifiedData = JSON.stringify(resultData);
    setDataInLocalStorage("singleNurse", stringifiedData);

    console.log(resultData);

    dispatch(setNurseDetail(resultData));
  };
};

export default nurseSlice.reducer;
