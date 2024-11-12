// Button.jsx
import React from "react";

const Button = ({ children, className = "", type = "button", onClick }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ease-in-out ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
