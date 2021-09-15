import React from 'react';

import SignUp from '../sarahComponents/SignUp';
import Login from '../sarahComponents/Login';
import Home from '../sarahPages/Home';



const routes = [

	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: Login,
		key: 'Login',
		path: '/login'
	},
	{
		Component: SignUp,
		key: 'SignUp',
		path: '/signup'
	}
];

export default routes;
