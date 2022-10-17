import { Btn } from './Button.style';
import React from 'react';

const Button = ({ children, disabled, ...props }) => {
	return (
		<Btn {...props} disabled={disabled}>
			{children}
		</Btn>
	);
};

export default Button;
