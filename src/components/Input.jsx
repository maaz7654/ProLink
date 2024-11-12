// Input.jsx
import React from "react";

const Input = ({
	placeholder,
	name,
	value,
	onChange,
	type = "text",
	className = "",
}) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={`w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-blue-500 transition duration-200 ${className}`}
		/>
	);
};

export default Input;
