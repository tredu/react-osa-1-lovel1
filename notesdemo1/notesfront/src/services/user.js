import axios from 'axios';

const baseUrlLogin = '/login'
const baseUrlRegister = '/register'

const login = newUser => {
    const request = axios.post(baseUrlLogin, newUser)
    return request.then(response => response.data)
}

const register = newUser => {
    const request = axios.post(baseUrlRegister, newUser)
    return request.then(response => response.data)
}

export default {
    login: login,
    register: register
}