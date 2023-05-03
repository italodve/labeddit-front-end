import axios from "axios";
import { BASE_URL } from "../../constants";
import { TOKEN_NAME } from "../../constants";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Group 1.png";
import { goToHomePage, goToSignupPage } from "../../routes/coordinator";
import { useForm } from "../../hooks";
import { EmailInput } from "../../components/inputs/email";
import { PasswordInput } from "../../components/inputs";
import { FormContainer, LFormContainer} from "./styled";
import { Divider } from '@chakra-ui/react'
import {
  
  Button
} from '@chakra-ui/react'
import { useState } from "react";


export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
const [ form, onChangeInputs, clearInputs ] = useForm ({
  email:"",
  password: ""

});
const  [isEmailValid, setIsEmailValid] = useState(true);
const  [isPasswordValid, setIsPasswordValid] = useState(true);
const  onSubmit = async (e) => {
e.preventDefault();
setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
setIsPasswordValid(/.{6,}/.test(form.password));


  try {
    setIsLoading(true);

    const body = {
      email: form.email,
      password: form.password
    };

    const response = await axios.post(BASE_URL + "/users/login", body);
    window.localStorage.setItem(TOKEN_NAME, response.data.token);

    setIsLoading(false);
    goToHomePage(navigate);
  } catch (error) {
    setIsLoading(false);
    console.error(error?.response?.data);
    window.alert(error?.response?.data)
  }
};
const  signupGo =  () => { 
  goToSignupPage(navigate);
}


  return (
    <LFormContainer>
      <FormContainer>
        <form   onSubmit={onSubmit}>
        <img src={logo} alt="logo labbedit"/>
        <p> O projeto de rede social da labenu</p>
       <EmailInput value={form.email} required onChange={onChangeInputs} isValid={isEmailValid}/>
   <PasswordInput value={form.password} onChange={onChangeInputs} isValid={isPasswordValid}/>
    <Button  isLoading={isLoading}
    loadingText='Submitting'
    
     variant='form' type="submit" >Continuar</Button>
    <Button onClick={signupGo}  as="a" variant="form2" type="button" >Crie uma conta</Button>
    <Divider  height='2px' orientation='horizontal' />
    </form>
      </FormContainer>
    </LFormContainer>
  )
}