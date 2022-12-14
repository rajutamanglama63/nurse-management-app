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

export default { userSignup, userSignin };
