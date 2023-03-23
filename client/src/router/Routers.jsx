
import {
	Routes,
	Route,
  } from "react-router-dom";


import NotFound from "../pages/NotFound";
import ZapateroDetails from "../pages/ZapateroDetails";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import SeccionNiños from "../components/SeccionNiños";
import SeccionHombre from "../components/SeccionHombre";
import SeccionMujer from "../components/SeccionMujer";
const Routers = () => {
	return (
		<Routes>
			  
			<Route path="/" element={<Home/>}/>
			<Route path="/cart" element={<Cart/>}/>
			<Route path="/zapatero/:id" element={<ZapateroDetails/>}/>
			<Route path="*" element={<NotFound />} />
			<Route path="/nino" element={<SeccionNiños />} />
			<Route path="/hombre" element={<SeccionHombre />} />
			<Route path="/mujer" element={<SeccionMujer />} />
		</Routes>
			
		
	)
};

export default Routers;
