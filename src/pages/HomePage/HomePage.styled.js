import styled from "styled-components";

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