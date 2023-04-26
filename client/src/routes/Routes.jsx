
import {
	Routes,
	Route,
  } from "react-router-dom";


import Home from "../pages/Home";
// import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";
import Register from "../pages/Register";
import RegisterTienda from "../pages/RegisterTienda";
// import { PrivateRoute } from "./PrivateRoute";
// import PizzaDetails from "../pages/PizzaDetails";



const Routers = () => {
	return (
		<Routes>  
			<Route path="/" element={<Home/>}/>
			<Route path="/login" element={<Login/>}/>
	
			<Route path="/register" element={<Register/>}/>
			<Route path="/registertienda" element={<RegisterTienda/>}/>
			{/* <Route path="/pizza/:id" element={<PizzaDetails/>}/> */}
			{/* <Route path="*" element={<NotFound />} /> */}

			
			<Route
              path="/Perfil"
              element={
                // <PrivateRoute>
                  <Perfil />
                // </PrivateRoute>
              }
            />
		</Routes>
			
		
	)
};

export default Routers;
