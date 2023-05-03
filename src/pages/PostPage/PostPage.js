import axios from "axios";
import {  useEffect, useState } from "react";
 import {  BASE_URL, GetReplys, TOKEN_NAME } from "../../constants/index";
 import { Button, Divider, Textarea } from "@chakra-ui/react";
 import { useParams } from "react-router-dom";
 import styled from "styled-components";
import { Header } from "../../components/Header";
import { GetPost } from "../../constants/index";
import { CommentsIcon,UpDownIcon,DislikeIcon } from "../../components/PostCard";
import ReplyCard from "../../components/ReplyCard";
import { goToLoginPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
const PostPageContainer = styled.div `
hr{
    margin-top: 32px;
    margin-bottom: 16px;
    border-bottom: 1px solid #CCC;
      background-image: linear-gradient(to right,#FF6489
          , #F9B24E
          );
  }
  form{
  Button{
    background-image: linear-gradient(to right,#FF6489
        , #F9B24E
        );
        color: white;
        border-radius: 40px 40px 40px 40px;
        margin-top: 16px;
}
  }
padding: 32px;

`;
const PostsContainer = styled.div `
display:  flex;
flex-direction: column;

`;
const PostCardContainer = styled.div `
margin-top: 12px;
margin-bottom: 12px;

background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
h1{
margin-top: 18px;
margin-bottom: 18px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
}
p{
  font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
/* identical to box height */


color: #6F6F6F;
}

`;

 export default function PostPage () {
  const navigate = useNavigate();

  const [replys, setReplys ] = useState();
    const [post, setPost ] = useState();
    const { id } = useParams();  
  const [isLoading, setIsLoading] = useState(false)
  const [postContent, setPostContent] = useState("")
  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (!token) {
      goToLoginPage(navigate);
    } else {
GetPost(id)
    .then(post => {
        setPost(post.post);
  })
  GetReplys(id)
  .then(replys => {
   setReplys(replys);
  })
  
    .catch(e => alert(e.response.data.message))
}
  }, [id]);

  const like = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        like: true
      }

      await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config);

      setIsLoading(false)
      GetPost(post.id)
      .then(post => {
    setPost(post.post);
      })
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };
  
  const dislike = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        like: false
      }

      await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config);

      setIsLoading(false)
      GetPost(post.id)
      .then(post => {setPost(post.post);
      })
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };
    
 const AddReply = async () => {
  try {
    const token = window.localStorage.getItem(TOKEN_NAME);

    const config = {
      headers: {
        Authorization: token
      }
    };

    const body = {
      reply: 1
    }

    await axios.put(BASE_URL + `/posts/${post.id}/reply`, body, config);

    setIsLoading(false)
    GetPost(post.id)
    .then(post => {setPost(post.post);
    })
  }
 catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };
  const createReply = async (e) => {
   
    e.preventDefault()

    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        content: postContent
      }

      await axios.post(BASE_URL + `/replys/${post.id}`, body, config);

      setPostContent("");
      setIsLoading(false)
      GetReplys(post.id)
    .then(data => {
      setReplys(data);
    })
    AddReply(post.id)
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  
    return(
        !post ? <h1>post não existe</h1> :  !replys? <h1>reply não existe</h1> :(

        <>
        <Header/>
        <PostPageContainer>
        <PostCardContainer>
    <p>Enviado por: {post.creator.name}</p>
      <h1>
        {post.content}
    
     </h1>
   <div>
      <span>
      <Button  onClick={like} leftIcon={<UpDownIcon />} colorScheme='white' size='md' variant='solid'>
  </Button>
  {post.likes}
  <Button  onClick={dislike} leftIcon={<DislikeIcon />} colorScheme='white' size='md' variant='solid'>
  </Button>
  {post.dislike}
  <Button   leftIcon={<CommentsIcon />} colorScheme='white' size='md' variant='solid'>
  </Button>
  {post.replys}

          </span>

  </div>
  
    </PostCardContainer>
        <section>
        <form onSubmit={createReply} >
          <section>
            <Textarea height={"130px"} textAlign={"left"} placeholder="Escreva seu post" backgroundColor={"#EDEDED"} color={"black"} focusBorderColor={"grey"} value={postContent} onChange={(e) => setPostContent(e.target.value)} />
          </section>
          <Button variant='form' type="submit" disabled={isLoading}  >Responder</Button>
        </form>
      </section>
      <Divider  height='2px' orientation='horizontal' />
      
<PostsContainer>
  
{replys.map((reply) => {
          return <ReplyCard key={reply.id} reply={reply} setReplys={setReplys}  />;
        })}
      </PostsContainer>

    </PostPageContainer>
        </>
        )
    )
 }