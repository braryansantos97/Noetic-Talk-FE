import React from 'react';

import SignUp from '../sarahComponents/SignUp';
import Login from '../sarahComponents/Login';
import Home from '../sarahPages/Home';
import About from '../sarahPages/About';
import CreatePost from '../sarahPages/CreatePost';
import CreateComment from '../sarahComponents/CreateComment';
import Chat from '../jamiePages/Chat';
// import Resources from '../sarahPages/Resources';


const routes = [


	{
		Component: Login,
		key: 'Login',
		path: '/login'
	},
	{
		Component: SignUp,
		key: 'SignUp',
		path: '/signup'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: CreatePost,
		key: 'CreatePost',
		path: '/createpost'
	},
	{
		Component: CreateComment,
		key: 'CreateComment',
		path: '/createcomment'
	},
	{
		Component: Chat,
		key: 'Chat',
		path: '/chat'
	}
	// {
	// 	Component: Resources,
	// 	key: 'Resources',
	// 	path: '/resources'
	// }
];

export default routes;
