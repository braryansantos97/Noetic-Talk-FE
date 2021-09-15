import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../sarahComponents/NavBar';
import Login from '../sarahComponents/Login';
import SignUp from '../sarahComponents/SignUp';



export default function Home({user, setUser, token, setToken, loggedInUser, setLoggedInUser}) {

const [posts, setPosts] = useState([]);
//NEED APIs
  useEffect(() => {
  		(async () => {
  			try {
  				const response = await fetch('https://noetic-talk.herokuapp.com/api/blogs');
          const data = await response.json();
  				setUser(data);
  			} catch (error) {
  				console.error(error);
  			}
  		})();
  	}, []);

  return(
    <>
      <Login
      user={user}
      setUser={setUser}
      token={token}
      setToken={setToken}
      loggedInUser={loggedInUser}
      setLoggedInUser={setLoggedInUser}
      />

      <SignUp user={user}
      setUser={setUser}
      token={token}
      setToken={setToken}
      loggedInUser={loggedInUser}
      setLoggedInUser={setLoggedInUser}
      />
    </>
  )
}
