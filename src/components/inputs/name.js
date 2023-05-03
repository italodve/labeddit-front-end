
import {
    FormControl,
    Input,

    FormErrorMessage,
    
  } from '@chakra-ui/react'

export const NameInput =  ({ isValid, value, onChange }) => {
    return(
<FormControl isInvalid={!isValid}>
<Input  name="name" required value={value} onChange={onChange} placeholder="Apelido"/>
{!isValid ? (
 
  <FormErrorMessage>Apelido invalido.</FormErrorMessage>
): undefined}

</FormControl >
    )
}