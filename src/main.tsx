import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { store } from '@/app/store';
import { AppThemeProvider } from '@/theme/AppThemeProvider';
import { ErrorBoundary } from '@/shared/errors/ErrorBoundary';
import { installGlobalErrorHandlers } from '@/shared/errors/handleError';
import { AppFeedbackHost } from '@/shared/ui';

installGlobalErrorHandlers();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
            <AppFeedbackHost />
          </BrowserRouter>
        </ErrorBoundary>
      </AppThemeProvider>
    </Provider>
  </StrictMode>,
);
