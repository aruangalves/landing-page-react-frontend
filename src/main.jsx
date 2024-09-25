import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global-styles';
import App from './templates/App';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
)
