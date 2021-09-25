import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../sarahComponents/NavBar';
import Login from '../sarahComponents/Login';
import SignUp from '../sarahComponents/SignUp';
import Posts from './Posts';
import CreatePost from './CreatePost'
import {context} from '../sarahComponents/context';

export default function Home({match, ...props}) {

const {user, posts, setPosts} = useContext(context);
const [subscribe, setSubscribe] = useState(true);

//NEED APIs
  useEffect(() => {
    if (match.path === '/' && subscribe === true) {
      (async () => {
  			try {
  				const response = await fetch('https://noetic-talk.herokuapp.com/api/blogs');
          const data = await response.json();
  				setPosts(data);
  			} catch (error) {
  				console.error(error);
  			}
  		})();
    } else {
      setSubscribe(false)
    }
    return () => {
      setSubscribe(false)
    }
  }, []); //wrap in if statement - only try to do this if i'm on home page

  return(
    <>
    
      <Link to='/createpost'> Create Post </Link>
      <Posts />
    </>
  )
}
