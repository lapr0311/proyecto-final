const {Router} = require('express');


const {createLogin,  createUser, getUsuarios, } = require('../controllers/auth.controllers');
const { reportQuery } = require('../middlewares/report');
const { verifyToken } = require('../middlewares/verifyToken');
const { checkCredentials } = require('../middlewares/checkCredentials');


const router = Router();
//crear datos

router.post('/login', reportQuery, checkCredentials, createLogin)

router.post('/users',reportQuery,  createUser)
//obtener datos
router.get('/users', reportQuery, verifyToken, getUsuarios)

module.exports = router;