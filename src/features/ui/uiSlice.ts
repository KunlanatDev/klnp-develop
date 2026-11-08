import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type Severity = 'success' | 'error' | 'info' | 'warning';
interface DialogState { open: boolean; title: string; message: string; confirmText: string; cancelText: string }

const slice = createSlice({
  name: 'ui',
  initialState: {
    toast: { open: false, message: '', severity: 'info' as Severity },
    dialog: { open: false, title: '', message: '', confirmText: 'OK', cancelText: 'Cancel' } as DialogState,
  },
  reducers: {
    showToast: (s, a: PayloadAction<{ message: string; severity?: Severity }>) => {
      s.toast = { open: true, message: a.payload.message, severity: a.payload.severity ?? 'info' };
    },
    hideToast: (s) => { s.toast.open = false; },
    openDialog: (s, a: PayloadAction<Partial<DialogState>>) => { s.dialog = { ...s.dialog, ...a.payload, open: true }; },
    closeDialog: (s) => { s.dialog.open = false; },
  },
});
export const { showToast, hideToast, openDialog, closeDialog } = slice.actions;
export default slice.reducer;
