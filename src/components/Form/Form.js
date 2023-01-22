import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import { nanoid } from 'nanoid'
import {
  FormControl,
  FormLabel,
  Input,
  Card,
  CardBody,
  Button,
  Center
} from '@chakra-ui/react'

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
        default:
          break;
    }
  };
  
  const handleSubmit = e => {
    e.preventDefault();
     const existingName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.some(contact => contact.number === number);

    if (existingName) {
      alert ('This name is already exist')
      return;
    } else if (existingNumber) {
      alert ('This number is already exist')
      return;
    } else {
   dispatch(addContacts({ id: nanoid(), name, number }));
    }
    reset();
  };


  const reset = () => {
   setName('');
   setNumber('');
  };


  return (
          <Card
      as="form"
      onSubmit={handleSubmit}
      autoComplete="off"
      direction="column"
      color='teal'
      marginTop='50px'
      marginBottom={4}>
      <CardBody>
        <FormControl>
          <FormLabel marginTop='12px'>Name</FormLabel>
          <Input value={name}
            type="text"
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            color='black'
            onChange={handleChange}/>
        </FormControl>
        <FormControl>
          <FormLabel marginTop='12px'>Number</FormLabel>
          <Input value={number}
            w='300px'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            color='black'
            onChange={handleChange}/>
        </FormControl>
      </CardBody>
         <Center w="100%" py="3">
        <Button
        type='submit'
        to="/register"
        colorScheme='teal'
          size='md'
      >
        Add contact
          </Button>
          </Center>
    </Card>
    )
  }
