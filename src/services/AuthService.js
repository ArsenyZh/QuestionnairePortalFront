import axios from 'axios'

const REST_API_POST_URL = "http://localhost:8080/log_in"

export const authUser = (authForm) => axios.post(REST_API_POST_URL, authForm);