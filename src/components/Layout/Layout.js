import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div style={{ maxWidth: '100%', margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Container centerContent padding={4}>
          <Outlet />
         </Container>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
