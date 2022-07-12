import './App.scss';

import Home from './pages/Home/Home';
import { ThemeProvider } from './context/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<Home />
		</ThemeProvider>
	);
}

export default App;
