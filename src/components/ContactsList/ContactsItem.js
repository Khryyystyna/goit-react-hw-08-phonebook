import css from './Contacts.module.css'
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Button, Stack} from '@chakra-ui/react'


export const ContactsItem = ({id}) => {
    const dispatch = useDispatch();
    const handleDelete = id => dispatch(deleteContacts(id));


    const contactsView = useSelector(selectVisibleContacts)
  
    return (
        <>
              <Stack spacing={4}  flexDirection="column" 
      justifyContent="space-between" >
            {contactsView.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    {name}:{number} 
                    
        <Button
            type='submit'
            to="/register"
            size='md'
            w='80px'
            h='20px'
            marginLeft='10px'
            color='teal'
        onClick={()=>handleDelete(id)}>
        Delete
      </Button>
                
                </li> 
            ))}
                </Stack>
            </>
        )}