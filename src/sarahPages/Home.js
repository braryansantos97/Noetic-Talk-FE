import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../sarahComponents/NavBar';
import Login from '../sarahComponents/Login';
import SignUp from '../sarahComponents/SignUp';
import CreatePost from './CreatePost'


export default function Home({user, setUser, token, setToken, loggedInUser, setLoggedInUser}) {

const [posts, setPosts] = useState([]);
//NEED APIs
  useEffect(() => {
  		(async () => {
  			try {
  				const response = await fetch('https://noetic-talk.herokuapp.com/api/blogs');
          const data = await response.json();
  				setPosts(data);
  			} catch (error) {
  				console.error(error);
  			}
  		})();
  	}, []);

  return(
    <>
      <CreatePost user={user}
      posts={posts}
      setPosts={setPosts}/>

    </>
  )
}
