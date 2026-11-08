import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { hideToast } from '@/features/ui/uiSlice';
import { settleConfirm } from '@/features/ui/confirm';
import { AppButton } from './AppButton';

// Mounted once at the root. Trigger from anywhere with dispatch(showToast(...)) or confirmDialog(...).
export function AppFeedbackHost() {
  const dispatch = useAppDispatch();
  const { toast, dialog } = useAppSelector((s) => s.ui);
  return (
    <>
      <Snackbar
        open={toast.open} autoHideDuration={5000} onClose={() => dispatch(hideToast())}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={toast.severity} variant="filled" onClose={() => dispatch(hideToast())}>{toast.message}</Alert>
      </Snackbar>
      <Dialog open={dialog.open} onClose={() => settleConfirm(false)} maxWidth="xs" fullWidth>
        <DialogTitle>{dialog.title}</DialogTitle>
        <DialogContent><DialogContentText>{dialog.message}</DialogContentText></DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <AppButton variant="ghost" onClick={() => settleConfirm(false)}>{dialog.cancelText}</AppButton>
          <AppButton variant="gradient" onClick={() => settleConfirm(true)}>{dialog.confirmText}</AppButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
