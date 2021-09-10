import React, { useState, useEffect } from 'react';

export default function SignUp() {

	const [token, setToken] = useState('');
	const [user, setUser] = useState({
    //NEED THESE KEYS AND VALUES
		username: '',
		email: '',
    confirmemail: '', //IS THIS NECESSARY??? IT'S NOT IN OUR SCHEMA, BUT IT IS ON THE FIGMA
		password: '',
    //DATE OF BIRTH ???????

    //VERIFICATION ??????
	});

	const [loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

  const handleChange = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

  const handleSignUp = async e => {
		try {
			const response = await fetch('/api/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
			const data = await response.json();
			console.log(data);
			setToken(data.token);
			setLoggedInUser(data.user.email);
			window.localStorage.setItem('token', data.token);
			window.localStorage.setItem('loggedInUser', data.user.email);
			//for the local storage so they don't have to log in every time it refreshes
		} catch (error) {
			console.error(error);
		}

  return (
    <div className="SignUpComponent">
    <div className="form-div form-floating mb-3 container">
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

        <div className="mb-3 form-floating row">
          <form className="signup-form row">
            <div className="mb-3 pl-2  form-floating col-md-6">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="form-control"
                id="floatingUsername"
                placeholder="Username"
              />
              <label htmlFor="floatingFirstName">Username:</label>
            </div>
              <div>
                <span>This is the name that will be shown in your messages. Please
                protect your privacy! Do not use your own name or a username that
                you use on other forums or social media.</span>
              </div>
            <p>----- or -----</p>
            <button>Randomly Generate</button>

            <div className="mb-3 pl-2 form-floating col-md-6">
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              <label htmlFor="floatingEmail">Email:</label>
            </div>

            <div className="mb-3 pl-2 form-floating col-md-6">
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              <label htmlFor="floatingEmail">Confirm Email:</label>
            </div>

            <div className="mb-3 pl-2 form-floating col-md-6">
              <input
                type="text"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control"
                id="floatingPasscode"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="col-auto">
            <span id="passwordGuidelines" className="form-text">
              Password must have at least 8 characters and contain at least two of
              the following: uppercase letters, lowercase letters, numbers, and
              symbols.
            </span>
          </div>

          <div className="mb-3 pl-2 form-floating col-md-6">
          Date of Birth:
           <input
             type="text"
             name="Month"
             value=
             onChange={handleChange}
             className="form-control"
             id="floatingMonth"
             placeholder="Month"
            />
            <label htmlFor="floatingMonth">Month</label>

           <input
             type="text"
             name="Day"
             value=
             onChange={handleChange}
             className="form-control"
             id="floatingDay"
             placeholder="Day"
            />
            <label htmlFor="floatingDay">Day</label>

           <input
             type="text"
             name="Year"
             onChange={handleChange}
             className="form-control"
             id="floatingYear"
             placeholder="Year"
            />
           <label htmlFor="floatingYear">Year</label>
          </div>

          <div>
          <input
            type="checkbox"
          />
          <span>I confirm, the above username isn't my real name and I don't
          use it on other forums or social media.
          </span>
          </div>

          <div>
            <span>Yellow and Blue make what color?</span>
            <input
              type="text"
              name="Verification"
              onChange={handleChange}
              className="form-control"
              id="floatingVerification"
              placeholder="Varification"
            />
             <label htmlFor="floatingVerification">Verification:</label>
          </div>

          <div>
            <span>*Required Information</span>
          </div>
          <p>By continuing, you agree to <Link to="/home">Terms of Use</Link> and <Link to="/home">Privacy Policy</Link>.</p>
          </form>
        </div>

        <div className="mb-3">
          <button
            type="submit"
            value="Register"
            className="btn btn-success mb-3"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
	};
