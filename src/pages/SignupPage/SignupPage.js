import axios from "axios";
import { BASE_URL } from "../../constants";
import { TOKEN_NAME } from "../../constants";
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
  Button,
  Checkbox,
  
} from '@chakra-ui/react'
import { Header } from "../../components/Header";
import { Signup } from "../../constants";
export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
const [ form, onChangeInputs] = useForm ({
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
  setIsLoading(true);

  const body = {
    name: form.name,
    email: form.email,
    password: form.password
  };

  const response = await axios.post(BASE_URL + "/users/signup", body);
  window.localStorage.setItem(TOKEN_NAME, response.data.token);

  setIsLoading(false);
  goToHomePage(navigate);
} catch (error) {
  setIsLoading(false);
  console.error(error?.response?.data);
  window.alert(error?.response?.data)
}
};

  return (
    <>
    <Header/>
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
   <Button  isLoading={isLoading}
    loadingText='Submitting'
    
     variant='form' type="submit" >Continuar</Button>
    <p>Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade</p>
    <Checkbox top={"20"} size='sm' colorScheme='blue'>
    Eu concordo em receber emails sobre coisas legais no Labeddit
  </Checkbox>
    
    </form>
      </FormContainer>
    </PageContainer>
    </>
  )
}