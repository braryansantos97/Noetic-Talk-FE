import React, {useState, useEffect} from 'react';
import NavBar from '../sarahComponents/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import ShowPost from '../sarahPages/ShowPost';
import Home from '../sarahPages/Home';
import CreatePost from '../sarahPages/CreatePost';
import Login from '../sarahComponents/Login';
import CreateComment from '../sarahComponents/CreateComment';
import SignUp from '../sarahComponents/SignUp';


const AppRouter = () => {

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
    DOB: '',
  });
  const [loggedInUser, setLoggedInUser] = useState('');
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);

  

    //VERIFICATION YELLOW AND GREEN ??????

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
  						component={(routerProps) => <Component {...routerProps} page={key}  user={user} setUser={setUser}
              loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
              token={token} setToken={setToken} posts={posts} setPosts={setPosts}/>}
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
