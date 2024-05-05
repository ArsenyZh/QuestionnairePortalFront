import axios from 'axios'

const REST_API_GET_URL = "http://localhost:8080/fields"
const REST_API_POST_URL = "http://localhost:8080/fields/create"

export const listFields = () => axios.get(REST_API_GET_URL);

export const createField = (field) => axios.post(REST_API_POST_URL, field);