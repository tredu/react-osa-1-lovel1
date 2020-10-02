import axios from 'axios';

const baseUrlLogin = '/login'
const bseUrlRegister = '/register'

const login = newUser => {
    const request = axios.post(baseUrlLogin, newUser)
    return request.then(response => response.data)
}

export default {
    login: login
}