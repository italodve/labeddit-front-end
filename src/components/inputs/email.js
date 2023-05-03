
import {
    FormControl,
    Input,
    FormErrorMessage
    
  } from '@chakra-ui/react'

export const EmailInput =  ({ isValid, value, onChange }) => {
    return(
<FormControl isInvalid={!isValid}>
<Input name="email"  required value={value} onChange={onChange} placeholder="E-mail"/>
{!isValid ? (
  <FormErrorMessage>Email invalido.</FormErrorMessage>
): undefined}

</FormControl >
    )
}