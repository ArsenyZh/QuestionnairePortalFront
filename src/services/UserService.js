import axios from "axios";

const id = 1

const REST_API_BASE_URL = "http://localhost:8080/user/"

export const user = () => axios.get(REST_API_BASE_URL + id)

export const editUserInfo = (profile) => axios.post(REST_API_BASE_URL + "edit_info/" + id, profile)

export const changeUserPassword = (passForm) => axios.post(REST_API_BASE_URL + "change_pas/" + id, passForm)

// import axios from "axios";


// const REST_API_BASE_URL = "http://localhost:8080/user"

// export const getUserId = () => {
//     return axios.get(REST_API_BASE_URL)
//       .then((response) => {
//         return response.data;
//     });
// };

// getUserId((userId) => {
//     console.log(userId);
// });

// export const user = () => axios.get(REST_API_BASE_URL + "/"+  userId)