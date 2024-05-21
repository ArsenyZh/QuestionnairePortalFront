import axios from 'axios'

const REST_API_URL = "http://localhost:8080/questionnaires"

export const listResponses = () => axios.get(REST_API_URL + "/get", {
    withCredentials: true
  })

export const createResponse = (response) => axios.post(REST_API_URL + "/add", response, {
  withCredentials: true
})

// export const updateField = (updatedField, id) => axios.put(REST_API_URL + "/update/" + id, updatedField) 

// export const deleteField = (id) => axios.delete(REST_API_URL + "/delete/" + id)