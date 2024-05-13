import axios from 'axios'

const REST_API_URL = "http://localhost:8080/fields"

export const listFields = () => axios.get(REST_API_URL);

export const createField = (field) => axios.post(REST_API_URL + "/create", field);

export const updateField = (updatedField, id) => axios.put(REST_API_URL + "/update/" + id, updatedField) 

export const deleteField = (id) => axios.delete(REST_API_URL + "/delete/" + id)