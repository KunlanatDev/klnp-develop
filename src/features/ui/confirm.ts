import { store } from '@/app/store';
import { closeDialog, openDialog } from './uiSlice';

// Usage anywhere:  if (await confirmDialog({ title: 'Delete?', message: '...' })) { ... }
let resolver: ((ok: boolean) => void) | null = null;

export function confirmDialog(o: { title: string; message: string; confirmText?: string; cancelText?: string }) {
  return new Promise<boolean>((resolve) => {
    resolver = resolve;
    store.dispatch(openDialog(o));
  });
}
export function settleConfirm(ok: boolean) {
  resolver?.(ok);
  resolver = null;
  store.dispatch(closeDialog());
}
