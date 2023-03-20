import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/PostCard";
import { BASE_URL, TOKEN_NAME } from "../../constants/index";
import { goToLoginPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContex";
import { Button, Divider, Textarea } from "@chakra-ui/react";
import styled from "styled-components";
import { Header } from "../../components/Header";

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
export default function HomePage() {
  
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { posts, fetchPosts } = context;

  const [isLoading, setIsLoading] = useState(false)
  const [postContent, setPostContent] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, []);

  const createPost = async (e) => {
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

      await axios.post(BASE_URL + "/posts", body, config);

      setPostContent("");
      setIsLoading(false)
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
  <>
    <Header/>
    <PostPageContainer>

      <section>
        <form onSubmit={createPost}>
          <section>
            <Textarea height={"130px"} textAlign={"left"} placeholder="Escreva seu post" backgroundColor={"#EDEDED"} color={"black"} focusBorderColor={"grey"} value={postContent} onChange={(e) => setPostContent(e.target.value)} />
          </section>
          <Button variant='form' type="submit" disabled={isLoading}  >Postar</Button>
        </form>
      </section>
      <Divider  height='2px' orientation='horizontal' />


      <PostsContainer>
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </PostsContainer>
    </PostPageContainer>
    </>
  );
}
