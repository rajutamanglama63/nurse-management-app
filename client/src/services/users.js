import axios from "axios";

const baseUrl = "/api/user";

const userSignup = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, userData);

    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

const userSignin = async (userCredentials) => {
  try {
    const response = await axios.post(`${baseUrl}/signin`, userCredentials);

    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

const refreshTheToken = async (refresh_token) => {
  try {
    // const token = JSON.parse(window.localStorage.getItem("loggedInUser")).token;
    // const config = {
    //   headers: { Authorization: `bearer ${token}` },
    // };
    const response = await axios.post(`${baseUrl}/refresh-token`, {
      refresh_token,
    });

    return response.data;
  } catch (error) {
    return error.response.data.msg;
  }
};

export default { userSignup, userSignin, refreshTheToken };
