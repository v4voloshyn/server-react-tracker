import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export const useTheme = () => {
	const themeStore = useContext(ThemeContext);
	return themeStore;
};
