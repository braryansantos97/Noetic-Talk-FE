import React, {useState, useEffect, createContext, useContext, useReducer} from 'react';
import NavBar from '../sarahComponents/NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';
import ShowPost from '../sarahPages/ShowPost';
import Home from '../sarahPages/Home';
import CreatePost from '../sarahPages/CreatePost';
import Login from '../sarahComponents/Login';
import CreateComment from '../sarahComponents/CreateComment';
import SignUp from '../sarahComponents/SignUp';
import {context} from '../sarahComponents/context';
import About from '../sarahPages/About';


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


  // const reducer = (state, action) => {
  //   const {type, payload} = action
  //   switch(type){
  //     case "add":
  //       return state + payload
  //     case "subtract":
  //       return state - payload
  //     default:
  //       return state
  //   }
  // }
  //
  // const [state, dispatch] = useReducer(reducer, 0)



    //VERIFICATION YELLOW AND GREEN ??????

    return (
  		<Router>
      <context.Provider value={{
        user, setUser, loggedInUser, setLoggedInUser,
        token, setToken, posts, setPosts
      }}>

  			<NavBar routes={routes} />
  			<Switch>
  				{routes.map(({ Component, key, path }) => (
  					<Route
  						key={key}
  						path={path}
  						exact
  						component={(routerProps) => <Component {...routerProps} page={key}/>}
  					></Route>
  				))}
  				<Route
  					path={'/:id'}
  					render={routerProps => <ShowPost {...routerProps} />}
  				></Route>
          <Route
  					path={'/'}
  					render={routerProps => <Home {...routerProps} />}
  				></Route>
  			</Switch>
      </context.Provider>
  		</Router>
  	);
  };

  export default AppRouter;
