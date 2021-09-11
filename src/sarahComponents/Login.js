import React, {useState, useEffect} from 'react';

///SARAH NOTE: PROPS WILL BE PASSED AS THIS WILL BE SHOWN
//ON HOME PAGE


export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  const [loggedInUser, setLoggedInUser] = useState('');
  const [token, setToken] = useState('');


  useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);


  const handleLogin = async e => {
  		e.preventDefault();
  		try {
  			const response = await fetch('/api/login', {
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

    <div className="form-div container">
        <form onSubmit={handleLogin} >
          <div >
            <h3>Log in</h3>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="email"
              id="floatingEmail"
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
            <Link to="/forgotpassword" >
              Forgot your password?
            </Link>
          </div>

          <div >
            <button  type="submit">
              Log in
            </button>
          </div>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          <p>By continuing, you agree to <Link to="/home">Terms of Use</Link> and <Link to="/home">Privacy Policy</Link>.</p>
        </form>
      </div>
    </div>
  )
}
