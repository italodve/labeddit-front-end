import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";
import { HeaderStyled } from "./styled";
import { Button } from "@chakra-ui/react";
export const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        goToLoginPage(navigate)
    };
    
    
        const login = () => {
            goToLoginPage(navigate)
        };

    return (
        <HeaderStyled>
            <Button  rightIcon colorScheme='blue' variant='ghost' onClick={logout}>logout</Button>
            <img src={logo} alt="logo"/>
            <Button colorScheme='blue' variant='ghost' onClick={login}>Entrar</Button>
        </HeaderStyled>
    );
}
