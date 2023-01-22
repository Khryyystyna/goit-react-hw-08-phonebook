import { NavLink } from 'react-router-dom';
import { Button, Stack, useColorMode } from '@chakra-ui/react'

export const AuthNav = () => {
  const { colorActive } = useColorMode();

  const buttonText = {
    inActive: { color: 'teal' },
    noActive: { color: 'teal' },
  };

  return (
    <Stack spacing={4} direction='row' align='center'>
     <Button
        as={NavLink}
        to="/register"
        size='md'
        width='90px'
         _activeLink={
          colorActive === 'active' ? buttonText.inActive : buttonText.noActive
        }
      >
        Register
      </Button>
       <Button
        as={NavLink}
        to="/login"
        size='md'
        width='90px'
        _activeLink={
          colorActive === 'active' ? buttonText.inActive : buttonText.noActive
        }
      >
        Log In
      </Button>
</Stack>
    // <div>
    //   <NavLink className={css.link} to="/register">
    //     Register
    //   </NavLink>
    //   <NavLink className={css.link} to="/login">
    //     Log In
    //   </NavLink>
    // </div>
  );
};
