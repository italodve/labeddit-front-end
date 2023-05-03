import React from 'react'

import {
    FormControl,
    Input,
    InputGroup,
    FormErrorMessage,
    
  } from '@chakra-ui/react'

 


  export const PasswordInput =  ({ isValid, value, onChange }) => {
    const [show, setShow] = React.useState(false)
    return(
<FormControl isInvalid={!isValid}>
<InputGroup size='md'>
  <Input  required
  name="password"
  value={value}
  onChange={onChange}
    pr='1.1rem'
    type={show ? 'text' : 'password'}
    placeholder='Enter password'
  />
</InputGroup>
{!isValid ? (
   
   <FormErrorMessage>senha invalida.</FormErrorMessage>
 ): undefined}
</FormControl>
    )}