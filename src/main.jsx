import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // Importera App istället för Homepage

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Använd App som root-komponent */}
  </StrictMode>
);