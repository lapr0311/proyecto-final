import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "../Hook/UseForm";

const Login = () => {
	const navigate = useNavigate();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();

    navigate("/Perfil", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });

    onResetForm();
  };
	return (
		<div>
		<section>
          <div className="form-box">
            <div className="form-value">
              <form onSubmit={onLogin}>
                <h2>Login</h2>
        
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={onInputChange}
                    required
                    autoComplete="off"
                  />
                  <label >Nombre</label>
               

                <div className="inputbox">
                  {/* <ion-icon name="mail-outline"></ion-icon> */}
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={onInputChange}
                    required
                    autoComplete="off"
                  />
                  <label >Email</label>
                </div>

                <div className="inputbox">
               
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onInputChange}
                    required
                    autoComplete="off"
                  />
                  
                </div>
                <div className="forget">
                  <label >
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
                <button>Log in</button>
                <div className="register">
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
		
	)
};

export default Login;
