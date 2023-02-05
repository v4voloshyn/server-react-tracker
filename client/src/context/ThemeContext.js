import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};
	const themeStore = {
		theme,
		toggleTheme,
	};

	useEffect(() => {
		const getLSTheme = localStorage.getItem('theme');
		setTheme(getLSTheme || 'dark');
	}, []);

	return <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>;
};
