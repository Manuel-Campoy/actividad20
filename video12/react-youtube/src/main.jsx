import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import React from 'react';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);