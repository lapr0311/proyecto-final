
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ZapateroContext } from "../context/ZapateroProvider";

export default function Navbar() {
  const navigate = useNavigate();
  const { usuario, setUsuario } = useContext(ZapateroContext);
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <span className="logo">SJ</span>

      <div className="opciones">
        <span className="">
          <Link to="/">
            Inicio

          </Link>
        </span>

        {!usuario ? (
          <div>
            <Link to="/register">
              <button className="">Registrarse</button>
            </Link>

            <Link to="/login">
              <button className="">Iniciar Sesión</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/perfil">
              <button className="">Mi Perfil</button>
            </Link>
            <button onClick={logout} className="">
              Salir
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
