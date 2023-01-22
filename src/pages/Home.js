import { Heading, Icon } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'


export default function Home() {
  return (
    <Heading as='h2' size='xl' marginTop='200px'>
     Welcome to phonebook <Icon as={PhoneIcon} w={8} h={8} color='teal' alignItems='center'/>
    </Heading> 
  );
}
