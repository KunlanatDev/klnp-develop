import { configureStore } from '@reduxjs/toolkit';
import themeReducer, { THEME_KEY } from '@/features/theme/themeSlice';
import uiReducer, { showToast } from '@/features/ui/uiSlice';
import { baseApi } from '@/shared/api/baseApi';
import { errorMiddleware } from '@/shared/errors/errorMiddleware';
import { registerErrorNotifier } from '@/shared/errors/handleError';

export const store = configureStore({
  reducer: { theme: themeReducer, ui: uiReducer, [baseApi.reducerPath]: baseApi.reducer },
  middleware: (gdm) => gdm().concat(baseApi.middleware, errorMiddleware),
});

registerErrorNotifier((message) => store.dispatch(showToast({ message, severity: 'error' })));
store.subscribe(() => {
  try { localStorage.setItem(THEME_KEY, store.getState().theme.id); } catch { /* ignore */ }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
