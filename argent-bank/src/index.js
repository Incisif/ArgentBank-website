import React from 'react';
import AppRouter from '../src/components/AppRouter'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppRouter />
  </React.StrictMode>
);



