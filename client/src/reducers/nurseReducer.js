import { createSlice } from "@reduxjs/toolkit";

import services from "../services/nurses";

const nurseSlice = createSlice({
  name: "nurse",
  initialState: {
    msg: "",
    nurses: [],
    nurseDetail: {},
  },
  reducers: {
    getNurse(state, action) {
      const responseData = action.payload;

      return typeof responseData === "string"
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : { ...state, msg: "", nurses: responseData, nurseDetail: {} };
    },
    setNurseDetail(state, action) {
      const responseData = action.payload;

      return typeof responseData === "string"
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : { ...state, msg: "", nurses: [], nurseDetail: responseData };
    },
    setNurse(state, action) {
      const responseData = action.payload;

      return responseData.msg
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : {
            ...state,
            msg: "",
            nurses: responseData,
            nurseDetail: {},
          };
    },
    nurseDelete(state, action) {
      const responseData = action.payload;

      return typeof responseData.msg
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : { ...state, msg: "", nurses: responseData, nurseDetail: {} };
    },
  },
});

export const { getNurse, setNurseDetail, setNurse, nurseDelete } =
  nurseSlice.actions;

export const getAllNurses = () => {
  return async (dispatch) => {
    const resultData = await services.nurseList();
    console.log("when del btn clicked: ", resultData);

    dispatch(getNurse(resultData));
  };
};

export const getNurseDetail = (nurseId) => {
  return async (dispatch) => {
    const resultData = await services.singleNurse(nurseId);

    dispatch(setNurseDetail(resultData));
  };
};

export const createNurse = (nurseData) => {
  return async (dispatch) => {
    const resultData = await services.registerNurse(nurseData);
    console.log("from nurse reducer: ", resultData);

    dispatch(setNurse(resultData));
  };
};

export const removeNurse = (nurseId) => {
  return async (dispatch) => {
    const resultData = await services.deleteNurse(nurseId);
    console.log("from nurse reducer: ", resultData);

    dispatch(nurseDelete(resultData));
  };
};

export default nurseSlice.reducer;
