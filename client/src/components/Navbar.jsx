import image from '../assets/img/arrow.svg'
import image2 from '../assets/img/menu.svg'

import {NavLink, useNavigate} from 'react-router-dom';
const Navbar = () => {
	return (
		<nav className="menu">
        <section className="menu__container">
            <h1 className="menu__logo">Zapatero</h1>

            <ul className="menu__links">
                <li className="menu__item">
                    <NavLink
					to="/"className="menu__link">Home</NavLink>
                </li>
    
                <li className="menu__item menu__item--show">
                    <a href="#" className="menu__link">Productos <img src={image} className="menu__arrow"/></a>
    
                    <ul className="menu__nesting">
                        <li className="menu__inside">
                            <a href="#" className="menu__link menu__link--inside">Mujer</a>
                        </li>
                        <li className="menu__inside">
                            <a href="#" className="menu__link menu__link--inside">Hombre</a>
                        </li>
                        <li className="menu__inside">
                            <a href="#" className="menu__link menu__link--inside">niños</a>
                        </li>
                    </ul>
                </li>
    
				<li className="menu__item">
                    <NavLink
					to="/cart"className="menu__link">Carrito</NavLink>
                </li>
    
                <li className="menu__item">
                    <a href="#" className="menu__link">LOGIN</a>
                </li>
    
            </ul>

            <div className="menu__hamburguer">
                <img src={image2}className="menu__img"/>
            </div>
        </section>

      
    </nav>
	)
};

export default Navbar;
