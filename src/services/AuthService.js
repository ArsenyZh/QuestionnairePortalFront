import axios from 'axios'

const REST_API_POST_URL = "http://localhost:8080/"

export const authUser = (authForm) => axios.post(REST_API_POST_URL + "log_in", authForm);

export const signUpUser = (signUpForm) => axios.post(REST_API_POST_URL + "sign_up", signUpForm)