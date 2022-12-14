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

      return typeof responseData === "string"
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

      return typeof responseData === "string"
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : { ...state, msg: "", nurses: responseData, nurseDetail: {} };
    },
    nurseEdit(state, action) {
      const responseData = action.payload;

      return typeof responseData === "string"
        ? { ...state, msg: responseData, nurses: [], nurseDetail: {} }
        : { ...state, msg: "", nurses: responseData, nurseDetail: {} };
    },
  },
});

export const { getNurse, setNurseDetail, setNurse, nurseDelete, nurseEdit } =
  nurseSlice.actions;

export const getAllNurses = () => {
  return async (dispatch) => {
    const resultData = await services.nurseList();

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

    dispatch(setNurse(resultData));
  };
};

export const removeNurse = (nurseId) => {
  return async (dispatch) => {
    const resultData = await services.deleteNurse(nurseId);

    dispatch(nurseDelete(resultData));
  };
};

export const nurseUpdate = (nurseId, updatedData) => {
  return async (dispatch) => {
    const resultData = await services.updateNurse(nurseId, updatedData);
    console.log("from edit nurse reducer: ", resultData);

    dispatch(nurseEdit(resultData));
  };
};

export default nurseSlice.reducer;
