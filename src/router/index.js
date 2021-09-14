import React from 'react';
import NavBar from '../sarahComponents/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import Show from '../sarahPages/ShowPost';



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
  			<NavBar routes={routes} />
  			<Switch>
  				{routes.map(({ Component, key, path }) => (
  					<Route
  						key={key}
  						path={path}
  						exact
  						component={() => <Component page={key} />}
  					></Route>
  				))}
  				<Route
  					path={'/:id'}
            //Confused about the ShowPost - I need to make sure all of the states
            //above get to all of the appropriate pages
  					render={routerProps => <ShowPost {...routerProps} />}
  				></Route>
  			</Switch>
  		</Router>
  	);
  };

  export default AppRouter;
