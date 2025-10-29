import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { theme } from './chakra/theme';
import { Wrapper } from './providers/Wrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wrapper theme={theme}>
      <App />
    </Wrapper>
  </StrictMode>
);
