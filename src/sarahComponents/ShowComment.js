import React, {useState, useEffect} from 'react';
import Comments from '../sarahComponents/Comments';
import CreateComment from '../sarahComponents/CreateComment';
import {Link} from 'react-router-dom';

export default function ShowPost({user, match}) {
  const [comment, setComment] = useState({

    username: '',
    message: '',
    createdAt: '',

  });


  useEffect(() => {
		(async () => {
			try {

				const response = await fetch(`https://noetic-talk.herokuapp.com/api/blogs/${match.params.id}`);
				const data = await response.json();
				setComment(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);


  // <Link to="/createcomment">Create Comment</Link>
  // <Comments user={user}/>

  return(
    <div className="PostPage container">
    {Object.keys(comment).length ? (
					<>
						<h2>{comment.username}</h2>
            <h4>{comment.message}</h4>
            <p>{comment.createdAt}</p>
						
					</>

				) : (
					<h1>Loading ...</h1>
				)}
    </div>
  )
}
