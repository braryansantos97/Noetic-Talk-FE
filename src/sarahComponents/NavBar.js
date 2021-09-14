import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar({user, token}) {

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
					         {username}
				             ) : (
                       <>
                       <button>Log in</button> {/*questions: 1. how do we make it so onClick it's an overlay and not a separate page?*/}
                       <button>Sign up </button> {/*questions: 1. how do we make it so onClick it's an overlay and not a separate page?*/}
                       </>
                     )}
			  </div>
        </div>
			</nav>
		</div>

  )
}
