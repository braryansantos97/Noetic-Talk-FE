import React, {useState, useEffect} from 'react';
import Comments from '../sarahComponents/Comments';
import CreateComment from '../sarahComponents/CreateComment';
import {Link} from 'react-router-dom';

export default function ShowPost({user, match}) {
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


  // <Link to="/createcomment">Create Comment</Link>
  // <Comments user={user}/>

  return(
    <div className="PostPage container">
    {Object.keys(post).length ? (
					<>
						<h2>{post.title}</h2>
            <h4>{post.username}</h4>
            <p>{post.createdAt}</p>
						<p>{post.body}</p>
            
					</>

				) : (
					<h1>Loading ...</h1>
				)}
    </div>
  )
}
