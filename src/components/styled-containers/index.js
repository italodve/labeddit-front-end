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
    margin-bottom: 10px;

}
p{
    position: absolute;
    top: 15h;
    
}

Button{
    background-image: linear-gradient(to right,#FF6489
        , #F9B24E
        );
        color: white;
        border-radius: 40px 40px 40px 40px;
        top: 25vh;
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
    position: absolute;
    z-index: 10;
    min-width: 10vw;
    max-width: 40vw;
    margin-bottom: 12vh;
    margin-left: 15vw;
   
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
`;
export const PageContainer = styled.div `
height: 94vh;
position: relative;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`;
export const BoasVindas = styled.div `
p{
    
position: relative;

left: 3vw;
top: -22vh;
    
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;
}

`;

export const PostCardContainer = styled.div `
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;

width: 80vw;
height: 16vh;

background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 1vw;
margin-bottom: 1vh;
p{
    width: 25vw;
height: 1vh;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;

text-align: center;

color: #6F6F6F;


}
h2{
width: 40vw;
height: 6vh;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;

color: #000000;


}
h1{
margin-bottom: 1vh;
}
`;


export const  PostPageContainer = styled.div `

flex-direction: column;
position: relative;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
background-color: white;

section {
width: 100%;
max-width: 200px;
padding: 16px;
flex-grow: 1;
}
input {
    margin-bottom: 10px;
    height: 20vh;
    width: 20vw;

}
form{
   top: 10vh;
}

Button{
    background-image: linear-gradient(to right,#FF6489
        , #F9B24E
        );
        color: white;
        border-radius: 40px 40px 40px 40px;
        height: 5vh;
        
}
`;
export const PostsContainer = styled.div `
height: 10vh;
width: 40vw;
position: relative;
display: grid;
flex-direction: column;
justify-content: center;
background-color: white;
align-items: center;
border-radius: 10px;
padding: 10px;
left: 6vw;
`;