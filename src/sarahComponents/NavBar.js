import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';


export default function NavBar({user, token, setToken, loggedInUser, setLoggedInUser}) {
  //function - onClick component shows up from buttons
  //reveal function will show the login or register - same as my Registry



let history = useHistory();

const logout = () => {
  console.log('logging out');
  localStorage.clear();
  setToken('')
  history.push('/');

}

  return (
    <div className="NavBar">
			<nav>

				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<NavLink
						key="Home"
						to="/"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Home
					</NavLink>{' '}
					<NavLink
						key="Chat"
						to="/chat"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Chat
					</NavLink>
					<NavLink
						key="Resources"
						to="/resources"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						Resources
					</NavLink>
					<NavLink
						key="About"
						to="/about"
						className="nav-link nav-item"
						exact
						activeClassName="activeLink"
					>
						About
					</NavLink>

        <div>
				    {token ? (
              <>
					         <p>{loggedInUser}</p>
                   <button onClick={logout}>Log out</button>
              </>
				             ) : (
                       <>
                       <button><Link to="/login">Log in</Link></button>
                       <button><Link to="/signup">Sign up</Link></button>
                       </>
                     )}
			  </div>
        </div>
			</nav>
		</div>

  )
}
