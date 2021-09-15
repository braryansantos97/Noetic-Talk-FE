import React, {useState, useEffect} from 'react';
import NavBar from '../sarahComponents/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import ShowPost from '../sarahPages/ShowPost';



const AppRouter = () => {

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    DOB: '',
  });
  const [loggedInUser, setLoggedInUser] = useState('');
  const [token, setToken] = useState('');



    //VERIFICATION ??????

    return (
  		<Router>
  			<NavBar routes={routes} user={user} setUser={setUser}
        loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
        token={token} setToken={setToken}/>
  			<Switch>
  				{routes.map(({ Component, key, path }) => (
  					<Route
  						key={key}
  						path={path}
  						exact
  						component={() => <Component page={key}  user={user} setUser={setUser}
              loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
              token={token} setToken={setToken}/>}
  					></Route>
  				))}
  				<Route
  					path={'/:id'}

  					render={routerProps => <ShowPost {...routerProps} user={user} setUser={setUser}
            loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
            token={token} setToken={setToken}/>}
  				></Route>
  			</Switch>
  		</Router>
  	);
  };

  export default AppRouter;
