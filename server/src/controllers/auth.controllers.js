const { newUser, userLogin, getProfile, getProfile2, newUserTienda } = require("../services/consultas");
const jwt = require("jsonwebtoken");

const {config} = require('dotenv');
config()
const { getToken } = require("../helper/obtainToken");
const createUser = async (req, res) => {
  try {
    const user = req.body;
    await newUser(user);
    res.send('Usuario registrado con éxito');
  } catch (error) {
    res.status(500).send(error);
  }
};
const  createUserTienda = async (req, res) => {
  try {
    const user = req.body;
    await newUserTienda(user);
    res.send('Usuario registrado con éxito');
  } catch (error) {
    res.status(500).send(error);
  }
}; 

const createLogin = async (req, res) => {
  try {
    const {  nombre, email, password, telefono, direccion} = req.body;
    await userLogin(nombre, email, password, telefono, direccion);
    const token = jwt.sign({ email }, process.env.SECRET_KEY);
    res.send(token);
    
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
};



const getUsuarios = async(req, res) => {
  try {
    const { email }= jwt.decode(getToken(req.header("Authorization")));
    console.log(email)
    const usuario = await getProfile(email);
    res.json(usuario)
  } catch (error) {
    console.log(error);
		res.status(error.code || 500).send(error);
  }
};
const getUsuariosTienda = async(req, res) => {
  try {
    const { email }= jwt.decode(getToken(req.header("Authorization")));
    console.log(email)
    const usuario = await getProfile2(email);
    res.json(usuario)
  } catch (error) {
    console.log(error);
		res.status(error.code || 500).send(error);
  }
};

module.exports = {
  createUser,
  createLogin,
  getUsuarios,
  createUserTienda,
  getUsuariosTienda
};
