
import { useState } from "react";
import React from "react"
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { useForm } from "../../hooks";
import { EmailInput } from "../../components/inputs/email";
import { PasswordInput } from "../../components/inputs";
import { NameInput } from "../../components/inputs";
import { BoasVindas, FormContainer,PageContainer} from "../../components/styled-containers";
import {
  Checkbox,
  Button,
} from '@chakra-ui/react'

import { Signup } from "../../constants";
export default function SignupPage() {
  const navigate = useNavigate();
const [ form, onChangeInputs ] = useForm ({
  name:"",
  email:"",
  password: ""

});
const  [isEmailValid, setIsEmailValid] = useState(true);
const  [isPasswordValid, setIsPasswordValid] = useState(true);
const  [isNameValid, setIsNameValid] = useState(true);
const  onSubmit = async (e) => {
e.preventDefault();
setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email));
setIsPasswordValid(/.{6,}/.test(form.password));
setIsNameValid(/.{2,}/.test(form.name));

try {
  const { token } = 
  isNameValid && isEmailValid && isPasswordValid && await Signup ({
    name: form.name,
    email: form.email,
    password: form.password
  })
  
  localStorage.setItem("labefy-token", token)
  goToHomePage(navigate)
  }catch(e) {
    alert(e.response.data.message)
  }
}

  return (
    <PageContainer>
      <FormContainer >
        
<BoasVindas>
  <p>Olá, boas vindas ao LabEddit ;) 
  </p>
  </BoasVindas>
        <form onSubmit={onSubmit}>
        <NameInput value={form.name} onChange={onChangeInputs} isValid={isNameValid}/>
       <EmailInput value={form.email} onChange={onChangeInputs} isValid={isEmailValid}/>
   <PasswordInput value={form.password} onChange={onChangeInputs} isValid={isPasswordValid}/>
    <Button variant='form' type="submit" >Cadastrar</Button>
    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
    <Checkbox top={"20"} size='sm' colorScheme='blue'>
    Eu concordo em receber emails sobre coisas legais no Labeddit
  </Checkbox>
    
    </form>
      </FormContainer>
    </PageContainer>
  )
}