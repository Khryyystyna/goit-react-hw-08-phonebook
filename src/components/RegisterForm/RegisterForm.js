import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" w='280px' color='black'/>
        </FormControl>
        <FormControl>
          <FormLabel marginTop='12px'>Email address</FormLabel>
          <Input type="email" name="email" color='black'/>
        </FormControl>
        <FormControl>
          <FormLabel marginTop='12px'>Password</FormLabel>
          <Input type='password' name="password" color='black'/>
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
        Register
          </Button>
          </Center>
      </CardFooter>
    </Card>
  );
}