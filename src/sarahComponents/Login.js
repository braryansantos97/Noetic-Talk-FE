import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export default function Login(
  {user,
  setUser, token, setToken,
  loggedInUser, setLoggedInUser}
) {


  useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);


  const handleLogin = async e => {
  		e.preventDefault();
  		try {
  			const response = await fetch('https://noetic-talk.herokuapp.com/api/login', {
  				method: 'POST',
  				headers: {
  					'Content-Type': 'application/json'
  				},
  				body: JSON.stringify(user)
  			});
  			const data = await response.json();
  			setToken(data.token);
  			setLoggedInUser(data.user.username);
  			window.localStorage.setItem('token', data.token);
  			window.localStorage.setItem('loggedInUser', data.user.username);
  		} catch (error) {
  			console.error(error);
  		}
  	};

  	const handleChange = e => {
  		setUser({ ...user, [e.target.name]: e.target.value });
  	};


  return(
    <div className="LoginComponent">

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form onSubmit={handleLogin} >
          <div class="modal-dialog" role="document">
            <h3>Log in</h3>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="username"
              id="floatingUsername"
              className="form-control"
            />
            <label htmlFor="floatingEmail">Email:</label>
          </div>

          <div className="form-floating">
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              id="floatingPassword"
            />
            <label htmlFor="floatingPassword">Password:</label>
          </div>
          <div className="col-auto">
            <Link to="/" >
              Forgot your password?
            </Link>
          </div>

          <div >
            <button  type="submit">
              Log in
            </button>
          </div>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          <p>By continuing, you agree to <Link to="/">Terms of Use</Link> and <Link to="/">Privacy Policy</Link>.</p>
        </form>
      </div>
    </div>
  )
}
