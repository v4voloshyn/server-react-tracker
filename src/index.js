import './index.css';

import { persistor, store } from './store/store';

import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<PersistGate loading={<h2>LOADING....</h2>} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
