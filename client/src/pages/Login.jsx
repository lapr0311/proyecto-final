import Input from "../components/Input";

const Login = () => {
	return (
		<div>
		<h1>login </h1>
		<Input placeholder="Ingresa un email" type = 'text'   required/>
		<Input placeholder= 'ingresa una contraseña' type = 'password'  required/>
		</div>
	)
};

export default Login;
