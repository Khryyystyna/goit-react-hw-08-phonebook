import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button, Stack } from '@chakra-ui/react'


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Stack spacing={4} direction='row' align='center'>
     <Button
        as={NavLink}
        to="/"
        colorScheme='teal'
        variant='outline'
        size='md'
        width='90px'
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          as={NavLink}
          to="/contacts"
          colorScheme='teal'
          size='md'
        >
          Contacts
        </Button>)}
</Stack>
    // <nav>
    //   <NavLink className={css.link} to="/">
    //     Home
    //   </NavLink>
    //   {isLoggedIn && (
    //     <NavLink className={css.link} to="/contacts">
    //       Contacts
    //     </NavLink>
    //   )}
    // </nav>
  );
};
