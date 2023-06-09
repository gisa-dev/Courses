import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HookApp from './HookApp';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<BrowserRouter>
		<HookApp />
	</BrowserRouter>,
	// </React.StrictMode>,
);
