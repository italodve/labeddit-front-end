import { extendTheme } from "@chakra-ui/react"; 

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                header: {
bg: "blue.500"
                },
                form: {
                    width: "100%",
                    _hover: {
                        
                        bg: "white",
                        color: "orange.500",
                        border: "3px solid orange"
                    }
                    
                },
                form2: {
                    width: "100%",
                    top: "7vh",
                    borderradius: "40px 40px 40px 40px",
                    _hover: {
                        fontWeight: "normal",
                        textDecoration: "underline",
                        bg: "white",
                        color: "orange.500",
                        border: "3px solid orange"
                    }
                    
                }
            }
        }
    },
    colors: {
        blue: {
            500: "blue"
        },
        white: {
            500: "white"
        },
        black: {
            500: "black"
        },
        orange: {
            500: "orange"
        },
        
    }
    
  })