import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';

export default function NavBar({user, token}) {
  //function - onClick component shows up from buttons
  //reveal function will show the login or register - same as my Registry

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
					         <p>{user.username}</p>
				             ) : (
                       <>
                       <Link to="/login">Log in</Link>
                       <Link to="/signup">Sign up</Link>
                       </>
                     )}
			  </div>
        </div>
			</nav>
		</div>

  )
}
