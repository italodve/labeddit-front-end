import { useEffect, useState } from "react";
import Router from "./routes/Router";
import { GlobalContext } from "./contexts/GlobalContex";
import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "./constants/index";
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from './styles'

export default function App() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (token) {
      fetchPosts();
    }
  }, []);
  
  const fetchPosts = async () => {
    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const response = await axios.get(BASE_URL + "/posts", config);

      setPosts(response.data);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };
  

  const context = {
    posts,
    fetchPosts
  };

  return (
    <ChakraProvider theme={theme}>
      
        <GlobalContext.Provider value={context}>
          <Router  />
        </GlobalContext.Provider>
    </ChakraProvider>
  );
}
