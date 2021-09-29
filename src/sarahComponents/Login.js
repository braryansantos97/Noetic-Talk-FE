import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {context} from './context';

export default function Login(props) {
  const {user, setUser, token, setToken,loggedInUser, setLoggedInUser} = useContext(context)
const [superwoman, setSuperwoman] = useState({...user})
const history = useHistory();

  useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);


  const handleLogin = async e => {
  		e.preventDefault();
  		try {
  			const response = await fetch('https://noetic-talk.herokuapp.com/login', {
  				method: 'POST',
  				headers: {
  					'Content-Type': 'application/json'
  				},
  				body: JSON.stringify(superwoman)
  			});
  			const data = await response.json();
  			setToken(data.token);
  			setLoggedInUser(data.user.username);
  			window.localStorage.setItem('token', data.token);
  			window.localStorage.setItem('loggedInUser', data.user.username);
        history.push('/');
  		} catch (error) {
  			console.error(error);
  		}
  	};

  	const handleChange = e => {
  		setSuperwoman({ ...superwoman, [e.target.name]: e.target.value });
  	};


  return(
    <div className="LoginComponent">

      <div className="" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <form onSubmit={handleLogin} >
          <div role="document">
            <h1>Log in</h1>
            <label htmlFor="floatingEmail">Email:</label>
            <input
              type="text"
              name="email"
              value={superwoman.email}
              onChange={handleChange}
              placeholder="Email"
              id="floatingUsername"
              className="form-control"
            />
            
          </div>
<label htmlFor="floatingPassword">Password:</label>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={superwoman.password}
              onChange={handleChange}
              placeholder="Password"
              id="floatingPassword"
              className="form-control"
            />
            
          </div>
          <div className="col-auto">
            <Link to="/" >
              Forgot your password?
            </Link>
          </div>

          <div>
            <button  className="btn btn-warning mb-3" type="submit">
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