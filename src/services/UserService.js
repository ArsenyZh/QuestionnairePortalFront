import axios from "axios";

let id = null;

const REST_API_BASE_URL = "http://localhost:8080/user/";

export const getCurrentUserId = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user', { withCredentials: true });
    id = response.data;
    return id;
  } catch (error) {
    console.error('Error getting user id:', error);
    throw error;
  }
};

export const user = async () => {
  const userId = await getCurrentUserId();
  return axios.get(REST_API_BASE_URL + userId, { withCredentials: true });
};

export const editUserInfo = (profile) => axios.post(REST_API_BASE_URL + "edit_info/" + id, profile, {
    withCredentials: true
  });

export const changeUserPassword = (passForm) => axios.post(REST_API_BASE_URL + "change_pas/" + id, passForm, {
    withCredentials: true
  });