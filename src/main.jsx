import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifWizApp } from './GifWizApp';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifWizApp />
  </StrictMode>,
);
