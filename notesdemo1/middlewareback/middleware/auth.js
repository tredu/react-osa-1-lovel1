const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    console.log(authorization);
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}


const isAuthenticated = (req, res, next) => {
    const token = getTokenFrom(req);

    if (!token) {
        return res.status(401).json({ error: 'token missing' });
    }

    const decodedToken = jwt.verify(token, config.SECRET);

    if (!decodedToken || !decodedToken.id) {
        return res.status(401).json({ error: 'token invalid' });
    }

    res.locals.auth = { userId: decodedToken.id }; //uusi
    next() //uusi
}

module.exports = isAuthenticated;