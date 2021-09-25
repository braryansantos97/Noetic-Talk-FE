import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {context} from '../sarahComponents/context';

export default function Posts(props){

  const {user, posts, loggedInUser, setToken, setLoggedInUser} = useContext(context)

  useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);


  return(
    <div className="posts-container">

      {posts && posts.map(post => {
        return (
          <li key={post._id}>
            <div className="card">
            <div className="card-body">
                  <h3 className="card-topic">{post.topic}</h3>
                  <p className="card-title">
                    {post.title}
                  </p>
                  <p className="card-body">
                    {post.body}
                  </p>
                  <p className="card-author">
                    author: {post.username}
                  </p>
                  <Link to={`/${post._id}`}>Read full post</Link>
              </div>
            </div>
          </li>
        )
      })}
    </div>
  )
}
