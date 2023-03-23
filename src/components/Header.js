import logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";
import { HeaderStyled } from "./styled";
import { Button } from "@chakra-ui/react";
import {  TOKEN_NAME } from "../constants";

export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        goToLoginPage(navigate)
        window.localStorage.removeItem(TOKEN_NAME);
        
    };
    
    const login = () => {
        goToLoginPage(navigate)
        
        
    };
    
    
    return (
        <HeaderStyled>
            <img src={logo} alt="logo"/>
            {location.pathname === "/signup"?
            <Button colorScheme='blue' variant='ghost' onClick={login}>Entrar</Button> 
            :
            <Button  rightIcon colorScheme='blue' variant='ghost' onClick={logout}>logout</Button>
              } 
        </HeaderStyled>
    );
}
