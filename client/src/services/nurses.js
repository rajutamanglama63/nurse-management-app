import axios from "axios";

const baseUrl = "/api/nurse";

const nursePicUpload = async (pic) => {
  try {
    const response = await axios.post(`${baseUrl}/photo/upload`, pic);
    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

const registerNurse = async (nurseData) => {
  try {
    const response = await axios.post(`${baseUrl}`, nurseData);
    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

const nurseList = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

const deleteNurse = async (nurseId) => {
  try {
    const token = JSON.parse(window.localStorage.getItem("loggedInUser")).token;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };

    const response = await axios.delete(`${baseUrl}/${nurseId}`, config);
    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

const updateNurse = async (nurseId, updatedNurseData) => {
  try {
    const token = JSON.parse(window.localStorage.getItem("loggedInUser")).token;
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };

    const response = await axios.delete(
      `${baseUrl}/${nurseId}`,
      updatedNurseData,
      config
    );
    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

export default {
  nursePicUpload,
  registerNurse,
  nurseList,
  deleteNurse,
  updateNurse,
};
