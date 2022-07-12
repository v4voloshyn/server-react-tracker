import { HeaderContainer } from './Header.style';
import { MaterialUISwitch } from '../UI/Switch/Switch';
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Header = () => {
	const { theme, toggleTheme } = useTheme();

	const changeTheme = () => {
		toggleTheme();
	};

	document.body.setAttribute('data-theme', theme);
	return (
		<HeaderContainer>
			<div>LOGO</div>
			<div className='theme-switch'>
				<label htmlFor='change-theme'>Change theme</label>
				<MaterialUISwitch
					id='change-theme'
					theme={theme}
					onChange={changeTheme}
					checked={theme === 'dark'}
				/>
			</div>
		</HeaderContainer>
	);
};

export default Header;
