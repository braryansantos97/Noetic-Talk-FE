import React, {useState, useEffect} from 'react';
import Comments from '../sarahComponents/Comments';
import CreateComment from '../sarahComponents/CreateComment';
import {Link} from 'react-router-dom';

export default function ShowPost({user, match, comment, setComment, loggedInUser}) {
  const [post, setPost] = useState({
    title: '',
    username: '',
    body: '',
    createdAt: '',
    comments: ''
  });
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
		(async () => {
			try {

				const response = await fetch(`https://noetic-talk.herokuapp.com/api/blogs/${match.params.id}`);
				const data = await response.json();
				setPost(data);
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
    {Object.keys(post).length ? (
					<>
						<h2>{post.title}</h2>
            <h4>{post.username}</h4>
            <p>{post.createdAt}</p>
						<p>{post.body}</p>
            <CreateComment user={user} match={match} comment={comment} setComment={setComment} loggedInUser={loggedInUser} comments={comments} setComments={setComments}/>
            <Comments user={user} comments={comments} loggedInUser={loggedInUser} setComments={setComments}/>

					</>

				) : (
					<h1>Loading ...</h1>
				)}
    </div>
  )
}
