import React from 'react';
import { createRoot } from 'react-dom/client';
import { JournalApp } from './JournalApp.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<JournalApp />
	</React.StrictMode>,
);
