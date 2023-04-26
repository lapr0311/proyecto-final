/* eslint-disable react/prop-types */
const Button = ({type, className, textButton}) => {
	return (
		<button type={type}className={className}>
		
			{textButton}
		</button>
	)
};

export default Button;
