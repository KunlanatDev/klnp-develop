import { isRejectedWithValue, type Middleware } from '@reduxjs/toolkit';
import { handleError } from './handleError';

// Every failed RTK Query request goes through the central handler.
export const errorMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const code = (action.payload as { code?: string } | undefined)?.code;
    handleError(action.payload, { silent: code === 'NOT_FOUND' });
  }
  return next(action);
};
