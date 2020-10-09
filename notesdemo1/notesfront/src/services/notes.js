import axios from 'axios';

const baseUrl = '/notes'

const makeHeader = (authToken) => {
    {
        let header = {
            headers: {Authorization: `bearer ${authToken}`}}
            return header;
    }
}

const getAll = (token) => {
    const request = axios.get(baseUrl, makeHeader(token))
    return request.then(response => response.data)
}

const add = (newNote, token) => {
    const request = axios.post(baseUrl, newNote, makeHeader(token))
    return request.then(response => response.data)
}



const update = (id, updatedNote, token) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedNote, makeHeader(token))
    return request.then(response => response.data)
}

const remove = (id, token) => {
    return axios.delete(`${baseUrl}/${id}`, makeHeader(token))
}

export default {
    getAll: getAll,
    add: add,
    update: update,
    remove: remove
}