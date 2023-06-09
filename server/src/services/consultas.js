const pool = require("../database/db");
const {config} = require('dotenv')
config()
const bcrypt = require('bcryptjs');


const newUser = async (user) => {
  let { nombre, email, password, telefono, direccion } = user;
  const query = "INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4, $5)";
  const encryptedPassword = bcrypt.hashSync(password);
  password = encryptedPassword;
  const values = [ nombre, email, encryptedPassword, telefono, direccion];
  await pool.query(query, values);
};

const newUserTienda = async (user) => {
  let {  email, password } = user;
  const query = "INSERT INTO usuariostienda values (DEFAULT, $1, $2, )";
  const encryptedPassword = bcrypt.hashSync(password);
  password = encryptedPassword;
  const values = [  email, encryptedPassword, ];
  await pool.query(query, values);
};


const userLogin = async (email, password) => {
  const values = [email]
  const consulta = "SELECT * FROM usuarios WHERE email = $1"
  const { rows: [usuario], rowCount } = await pool.query(consulta, values)
  const { password: passwordEncriptada } = usuario
  const passwordEsCorrecta = bcrypt.compareSync(password, passwordEncriptada)
  if (!passwordEsCorrecta || !rowCount)
    throw { code: 401, message: "Email o contraseña incorrecta" }
};

const getProfile = async(email) => {
  const value = [email];
  const query = "SELECT * FROM usuarios WHERE email = $1";
  const result = await pool.query(query, value);
  const usuario = {
    email: result.rows[0].email,
    rol: result.rows[0].rol,
    lenguage: result.rows[0].lenguage
  }
  return usuario;
}
const getProfile2 = async(email) => {
  const value = [email];
  const query = "SELECT * FROM usuariostienda  WHERE email = $1";
  const result = await pool.query(query, value);
  const usuario1 = {
    email: result.rows[0].email,
    // rol: result.rows[0].rol,
    // lenguage: result.rows[0].lenguage
  }
  return usuario1;
}

module.exports = { newUser, newUserTienda, userLogin, getProfile, getProfile2 };