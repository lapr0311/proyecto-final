import imageZapatoMujer from "../assets/img/mujer-zapatero.jpg";
import imageZapatoHombre from "../assets/img/zapato-hombre.jpg";
import imageZapatoNiña from "../assets/img/zaoatoniñas.jpg";
import { NavLink } from "react-router-dom";
const Seccion = () => {
  return (
	<section className="seccion">
    <div className=" seccion__row ">
      <div className="seccion__card ">
        <NavLink to="/mujer">
          <img className="seccion__card__image" src={imageZapatoMujer} />

          <div className="seccion__card__title">Mujer</div>
        </NavLink>
      </div>
      <div className="seccion__card ">
        <NavLink to="/hombre">
          <img className="seccion__card__image" src={imageZapatoHombre} />
         
          <div className="seccion__card__title">Hombre</div>
        </NavLink>
      </div>
      <div className="seccion__card  ">
        <NavLink to="/nino">
          <img className="seccion__card__image" src={imageZapatoNiña} />
         
          <div className="seccion__card__title">Niñas/Niños</div>
        </NavLink>
      </div>
    </div>
	</section>
  );
};

export default Seccion;
