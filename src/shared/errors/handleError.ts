import { normalizeError } from './AppError';

type Notifier = (message: string) => void;
let notify: Notifier = () => {};
export const registerErrorNotifier = (fn: Notifier) => { notify = fn; };

// The one function every catch block calls: normalize → log → toast.
export function handleError(e: unknown, opts: { silent?: boolean } = {}) {
  const err = normalizeError(e);
  console.error(`[${err.code}]`, err.detail ?? err);
  if (!opts.silent) notify(err.userMessage);
  return err;
}

export function installGlobalErrorHandlers() {
  window.addEventListener('unhandledrejection', (ev) => handleError(ev.reason));
  window.addEventListener('error', (ev) => handleError(ev.error ?? ev.message));
}
