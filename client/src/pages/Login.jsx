import { Link, useNavigate,  } from "react-router-dom";
import Input from "../components/Input";
// import { useForm } from "../Hook/UseForm";
import Title from "../components/Title";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
// import { useContext } from "react";
// import { ZapateroContext } from "../context/ZapateroProvider";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
	const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      //Validación;
      if ( email === "" || password === "" ) {
       setError("escriba algo 😍");
     } else {
             await axios.post("http://localhost:8001/login", {
            
             email,
             password,
            
           });
       
           navigate("/perfil");}
         } catch (error) {
           console.log(error);
         }
       };
     
    
  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleSubmit}>
            <Title h1=" Login"/>
                 {error ? <p>{error}</p> : null}
             

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

             

              
<Button type="submit" textButton='login'/>
<div className="forget">
                <label>
                  <Input type="checkbox" />
                  Recuerdame{" "}
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ¿Olvidaste tú password?
                  </a>
                </label>
              </div>
              <div>
                <p>Si no posees cuenta, </p>
                <Link className="link1" to="/Register">
                  Registrate
                </Link>
                <div>
                  <Link className="link2" to="/">
                    Volver al inicio
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
