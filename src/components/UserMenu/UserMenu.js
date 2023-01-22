import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Stack, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Stack spacing={4} direction='row' align='center'>
      <Text fontSize='lg'>Welcome, {user.name}</Text>
      <Button
        onClick={() => dispatch(logout())}
        as={NavLink}
        to="/"
        size='md'
        width='90px'
        bg='teal'
        color="white"
      >
        Log Out
      </Button>
    </Stack>
  );
};