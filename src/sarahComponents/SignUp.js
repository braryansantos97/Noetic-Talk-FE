import React, { useState, useEffect, useRef, useContext } from 'react';
import  { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {context} from './context';
import {BsArrowRepeat} from "react-icons/bs";

export default function SignUp(props) {
  const {user, setUser, token, setToken, loggedInUser, setLoggedInUser} = useContext(context)
  let history = useHistory();
  const monthInput = useRef(null);
  const dayInput = useRef(null);
  const yearInput = useRef(null);
  const [superman, setSuperman] = useState({...user});
  //before we update, take the value, combine into temp literal, then set DOB to that

  useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

  const handleChange = e => {
		setSuperman({ ...superman, [e.target.name]: e.target.value });
	};

  const handleSignUp = async e => {
    e.preventDefault();

    const newUser = {
      username: superman.username,
      email: superman.email,
      password: superman.password,
      DOB: `${monthInput.current.value}/${dayInput.current.value}/${yearInput.current.value}`
    }
    setUser(superman)

		try {
			const response = await fetch('https://noetic-talk.herokuapp.com/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newUser)
			});
			const data = await response.json();
			setToken(data.token);
			setLoggedInUser(data.user.username);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.username);
      console.log(data)
      history.push('/');
			//for the local storage so they don't have to log in every time it refreshes
      console.log('hi')
		} catch (error) {
			console.error(error);
		}
	}


  return (
    <div className="SignUpComponent">
      <div className="form-div form-floating mb-3 container">
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
        <div className="form-group">
          <div >
          <label htmlFor="floatingFirstName">Username:</label>
            <input
              type="text"
              name="username"
              value={superman.username}
              onChange={handleChange}
              className="form-control"
              id="floatingUsername"
              placeholder="Username"
            />
            
          <div>
            <span>
              This is the name that will be shown in your messages. Please
              protect your privacy! Do not use your own name or a username that
              you use on other forums or social media.
            </span>
          </div>
            <p>----- or -----</p>
            <button type="button" id="random" >Randomly Generate<BsArrowRepeat/></button>
        </div>

          <form className="signup-form row" onSubmit={handleSignUp}>
            <div >
            <label htmlFor="floatingEmail">Email:</label>
              <input
                type="text"
                name="email"
                value={superman.email}
                onChange={handleChange}
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              
            </div>

            <div >
            <label htmlFor="floatingEmail">Confirm Email:</label>
              <input
                type="text"
                name="email"
                value={superman.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
              />
              
            </div>

            <div >
            <label htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                name="password"
                value={superman.password}
                onChange={handleChange}
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              
            </div>
            <div className="col-auto">
            <span id="passwordGuidelines" className="form-text">
              Password must have at least 8 characters and contain at least two of
              the following: uppercase letters, lowercase letters, numbers, and
              symbols.
            </span>
          </div>
          
          <div className="flex-container">
          Date of Birth: 
            <label htmlFor="floatingMonth"></label>
            <input
              type="text"
              ref={monthInput}
              name="Month"
              className="flex-item"
              id="floatingMonth"
              placeholder="Month"
            />
            
            <label htmlFor="floatingDay"></label>
            <input
              type="text"
              ref={dayInput}
              name="Day"
              className="flex-item"
              id="floatingDay"
              placeholder="Day"
            />
            
            <label htmlFor="floatingYear"></label>
            <input
              type="text"
              ref={yearInput}
              name="Year"
              className="flex-item"
              id="floatingYear"
              placeholder="Year"
            />
            
          </div>

          <div className="form-group">
            <input className="form-check-input"
              type="checkbox"
            />&nbsp;
            <span>
              I confirm, the above username isn't my real name and I don't
              use it on other forums or social media.
            </span>
          </div>

          <div>
            {/* <span>Yellow and Blue make what color?</span> */}
            <label htmlFor="floatingVerification">Verification:</label>
            <input
              type="text"
              name="Verification"
            // onChange={handleChange}
              className="form-control"
              id="floatingVerification"
              placeholder="Verification"
            />
             
          </div>

          <div>
            <span>*Required Information</span>
          </div>
          <p>By continuing, you agree to <Link to="/home">Terms of Use</Link> and <Link to="/home">Privacy Policy</Link>.</p>
          <button
            type="submit"
            value="Register"
            onClick={handleSignUp}
            className="btn btn-warning mb-3"
          >
            Sign Up
          </button>
          </form>
        </div>
      </div>
    </div>
  )
}
