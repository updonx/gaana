import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { AppProvider } from './contexts/context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
<AppProvider>
    <App />
    </AppProvider>
);
