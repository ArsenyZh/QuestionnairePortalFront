import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/user/1"

export const user = () => axios.get(REST_API_BASE_URL )

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