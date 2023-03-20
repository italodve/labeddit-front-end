import styled from "styled-components"; 


export const FormContainer = styled.div `
min-width: 45vw;
max-width: 95vw;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
border-radius: 10px;
padding: 10px;
input {
    margin-bottom: 2vh;

}

Button{
    background-image: linear-gradient(to right,#FF6489
        , #F9B24E
        );
        color: white;
        border-radius: 40px 40px 40px 40px;
        top: 3vh;
        height: 5vh;
        
}
hr{
    
	border-bottom: 1px solid #CCC;
    background-image: linear-gradient(to right,#FF6489
        , #F9B24E
        );
}
a{
    background-image: linear-gradient(to right,white
        , white
        );
        
    color: orange;
        border-radius: 40px 40px 40px 40px;
    
        border: 1px solid orange;
        top: 7vh;
        height: 5vh;
}
img{
    position:relative;
    z-index: 10;
    min-width: 10vw;
    max-width: 40vw;
    margin-bottom: 10vh;
    margin-left: 35%;
   
}
@media only screen and (max-width: 430px) {
    img {
        margin-left: 20%;
    }
  }
h1{
    
    margin-left: 12vw;
    margin-bottom: 12vh;
    font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 21px;
   
}
p{
    margin-bottom: 100px;
}
@media only screen and (min-width: 800px) {
    p {
       margin-left: 25%;
    }
  }
`;
export const LFormContainer = styled.div `
height: 88vh;
position: relative;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`;