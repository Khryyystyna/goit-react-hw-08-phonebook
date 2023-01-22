import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Card,
  CardBody,
  CardFooter,
  Button,
  Center
} from '@chakra-ui/react'

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    };
    
    return (
    <Card
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      direction="column"
      color='teal'
      bg='#fafcfc'
      marginTop='50px'>
      <CardBody>
        <FormControl>
          <FormLabel marginTop='12px'>Email address</FormLabel>
          <Input type="email" name="email" color='black'  w='280px'/>
        </FormControl>
        <FormControl>
          <FormLabel marginTop='12px'>Password</FormLabel>
          <Input type='password' name="password"  w='280px' color='black'/>
        </FormControl>
      </CardBody>
      <CardFooter>
         <Center w="100%" py="3">
        <Button
        type='submit'
        to="/register"
        colorScheme='teal'
          size='md'
      >
        Log In
          </Button>
          </Center>
      </CardFooter>
    </Card>
  );
}
  
  
//   return (
//        <Stack spacing={4} marginTop='100px'>
     
//       <InputGroup size='md'>
//     <Input placeholder='email' />
//     <InputRightAddon children='.com' />
//       </InputGroup>

//    <FormControl>
//   <Input type='password' placeholder='password'/>
// </FormControl>

//      <Button
//         type='submit'
//         to="/register"
//         colorScheme='teal'
//         size='md'
//         onClick={handleSubmit}
//       >
//         Log In
//       </Button>
//     </Stack>
    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>
