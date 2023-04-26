import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import { toast } from "react-toastify";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/users", {
        nombre,
        email,
        password,
        telefono,
        direccion,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }

      navigate("/login");
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
              <h2>Registrate</h2>
              <div className="inputbox">
                {/* <ion-icon name="mail-outline"></ion-icon> */}
                <Input
                  type="name"
                  name="name"
                  id="name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  autoComplete="off"
                />
                <label>Nombre</label>
              </div>

              <div className="inputbox">
                {/* <ion-icon name="mail-outline"></ion-icon> */}
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="off"
                />
                <label>Email</label>
              </div>

              <div className="inputbox">
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
                <label>Password</label>
              </div>

              <div className="inputbox">
                <Input
                  type="number"
                  name="telefono"
                  id="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                  autoComplete="off"
                />
                <label>telefono</label>
              </div>

              <div className="inputbox">
                {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                <Input
                  type="text"
                  name="direccion"
                  id="direccion"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                  autoComplete="off"
                />
                <label>direccion</label>
              </div>

              <button type="submit">Registrate</button>
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
