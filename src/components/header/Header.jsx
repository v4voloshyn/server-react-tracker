import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
	const { theme, toggleTheme } = useTheme();
	return <div>Header</div>;
};

export default Header;
