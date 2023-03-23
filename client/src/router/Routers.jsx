
import {
	Routes,
	Route,
  } from "react-router-dom";


import NotFound from "../pages/NotFound";
import ZapateroDetails from "../pages/ZapateroDetails";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const Routers = () => {
	return (
		<Routes>
			  
			<Route path="/" element={<Home/>}/>
			<Route path="/cart" element={<Cart/>}/>
			<Route path="/zapatero/:id" element={<ZapateroDetails/>}/>
			<Route path="*" element={<NotFound />} />

		</Routes>
			
		
	)
};

export default Routers;
