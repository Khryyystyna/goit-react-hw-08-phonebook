import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter';
import { Input, Stack } from '@chakra-ui/react'

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    return (
        <Stack spacing={3}>
  <Input placeholder='Find contacts by name' size='md'  type="text"
                    value={filter}
                    onChange={e => dispatch(setFilter(e.target.value))}/>
</Stack>
    )
}


