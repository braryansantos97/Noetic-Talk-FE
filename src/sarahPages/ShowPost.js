import React, {useState, useEffect, useContext} from 'react';
import Comments from '../sarahComponents/Comments';
import CreateComment from '../sarahComponents/CreateComment';
import {Link} from 'react-router-dom';
import {context} from '../sarahComponents/context';

export default function ShowPost({comment, setComment, ...props}) {

  const {user, loggedInUser, token, setToken, setLoggedInUser} = useContext(context)
  const [post, setPost] = useState({
    title: '',
    username: '',
    body: '',
    createdAt: '',
    comments: ''
  });
  const [comments, setComments] = useState([]);

  useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);


  useEffect(() => {
		(async () => {
			try {

				const response = await fetch(`https://noetic-talk.herokuapp.com/api/blogs/${props.match.params.id}`);
				const data = await response.json();
				setPost(data);
        setComments(data.comments)
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

  useEffect(() => {
		console.log("UseEffect", loggedInUser)
	}, [loggedInUser]);

  // <Link to="/createcomment">Create Comment</Link>
  // <Comments user={user}/>
  // <CreateComment />

  return(
    <div className="PostPage container">
    {Object.keys(post).length && token ? (
					<>
						<h2>{post.title}</h2>
            <h4>{post.username}</h4>
            <p>{post.createdAt}</p>
						<p>{post.body}</p>
            <CreateComment  match={props.match} comment={comment} setComment={setComment} comments={comments} setComments={setComments}/>
            <Comments  comments={comments} setComments={setComments}/>

					</>

				) : (
					<h1>Please login or sign up above</h1>
				)}
    </div>
  )
}
