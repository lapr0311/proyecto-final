CREATE DATABASE pruebas;
\c pruebas;
CREATE TABLE usuarios ( id SERIAL, nombre VARCHAR(50) NOT NULL,  email VARCHAR(50) NOT NULL, password
VARCHAR(60) NOT NULL, telefono VARCHAR(25), direccion  VARCHAR(60) );
SELECT * FROM usuarios;
