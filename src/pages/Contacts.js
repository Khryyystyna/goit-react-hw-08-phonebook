import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { selectContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Heading } from '@chakra-ui/react';

const Contacts = () => {
  const contactList = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Form/>
      <Filter/>
      {contactList.length > 0 && (
        <Heading
          as='h3'
          size='lg'
          marginTop={4}
          fontWeight="bold"
          color='teal'
          marginBottom={4}
        >
          Contacts
        </Heading>
      )}
     <ContactsList/>
    </>
  );
};

export default Contacts;