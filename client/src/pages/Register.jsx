import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
// import { toast } from "react-toastify";
import Title from "../components/Title";
import Button from "../components/Button";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
	const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Validación;
      if (nombre === "" || email === "" || password === "" || telefono === "" || direccion === "") {
       setError("escriba algo 😍");
     } else {
             await axios.post("http://localhost:8001/users", {
             nombre,
             email,
             password,
             telefono,
             direccion,
           });
       
           navigate("/login");}
         } catch (error) {
           console.log(error);
         }
       };
     

  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
            <Title h1=" Registrate"/>
                 {error ? <p>{error}</p> : null}
              <div className="inputbox">
              <Title titleLabel=" Ingresa Nombre"/>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  autoComplete="off"
                />
           
              </div>

              <div className="inputbox">
              <Title titleLabel=" Ingresa tu Email"/>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
            
              </div>

              <div className="inputbox">
              <Title titleLabel=" Ingresa tu Contraseña"/>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
              
              </div>

              <div className="inputbox">
              <Title titleLabel=" Ingresa tu Telefono"/>
                <Input
                  type="number"
                  name="telefono"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  autoComplete="off"
                />
             
              </div>

              <div className="inputbox">
              <Title titleLabel=" Ingresa tu Dirección "/>
                <Input
                  type="text"
                  name="direccion"
                  id="direccion"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                  autoComplete="off"
                />
             
              </div>
<Button type="submit" textButton='Registrate'/>
              
              <div className="link3">
                <Link className="to" to="/">
                  Volver al inicio
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
