import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function MainLayout() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}><Outlet /></Box>
      <Footer />
    </Box>
  );
}
