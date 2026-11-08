import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AppButton } from '@/shared/ui';

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ py: 12, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>Page not found</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>The link may be wrong or the page has moved.</Typography>
      <AppButton variant="gradient" to="/">Back to home</AppButton>
    </Container>
  );
}
