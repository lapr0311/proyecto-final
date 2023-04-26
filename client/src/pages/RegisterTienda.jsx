import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "../components/Input";
import { toast } from "react-toastify";

const RegisterTienda = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("no coincide la contraseña!");
        return;
      }
      const res = await axios.post("http://localhost:8001/userstienda", {
        email,
        password,
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
              {error && <p>{error}</p>}
              <div className="inputbox">
                <label>email</label>
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
                <label>Contraseña</label>
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
                <label>Repetir Contraseña</label>
                <Input
                  type="password"
                  name="confirm password"
                  id="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  autoComplete="off"
                />
              </div>

              <button type="submit">Registrate</button>
              <div className="link3">
                <Link className="to" to="/login">
                  Volver al login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default RegisterTienda;
