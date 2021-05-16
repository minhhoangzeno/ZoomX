import axios from 'axios';
const BASE_URL = 'http://localhost:3001'
export const doPost = async (path, headers, formData) => {
    return axios({
        url: BASE_URL + path,
        method: 'POST',
        headers: headers,
        data: formData
    })
}

export const doGet = async (path, headers) => {
    return axios({
        url: BASE_URL + path,
        method: 'GET',
        headers: headers
    })
}

export const doPut = async (path, headers, formData) => {
    return axios({
        url: BASE_URL + path,
        method: 'PUT',
        headers: headers,
        data: formData
    })
}
export const deDelete = async (path,headers) => {
    return axios({
        url: BASE_URL
    })
}
