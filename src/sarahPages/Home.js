import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../sarahComponents/NavBar';
import Login from '../sarahComponents/Login';
import SignUp from '../sarahComponents/SignUp';
import CreatePost from './CreatePost'
import Posts from './Posts'


export default function Home({user, setUser, token, setToken, loggedInUser, setLoggedInUser}) {

const [posts, setPosts] = useState({
  topic: '',
  title: '',
  body: '',

});
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
      <Link to='/createpost'> Create Post </Link>
      <Posts user={user} posts={posts}/>
    </>
  )
}
