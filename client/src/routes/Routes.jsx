
import {
	Routes,
	Route,
  } from "react-router-dom";


import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import Register from "../pages/Register";
// import PizzaDetails from "../pages/PizzaDetails";

const Routers = () => {
	return (
		<Routes>  
			<Route path="/" element={<Home/>}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/perfil" element={<Perfil/>}/>
			<Route path="/Register" element={<Register/>}/>
			{/* <Route path="/pizza/:id" element={<PizzaDetails/>}/> */}
			{/* <Route path="*" element={<NotFound />} /> */}

		</Routes>
			
		
	)
};

export default Routers;
