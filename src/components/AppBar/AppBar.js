import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {
  Box,
  Container,
  Flex,
} from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      as="header"
      py="2"
      px="4"
    > 
     <Container maxW="100vw">
        <Flex justifyContent="space-between" align-items="center" flexWrap='wrap'>
           <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Flex>
      </Container>
    </Box>
    
  );
};
