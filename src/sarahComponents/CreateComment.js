import React, { useState, useEffect, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import {context} from './context';

export default function CreateComment({match, ...props}) {

  const {user, loggedInUser} = useContext(context);

  const [newComment, setNewComment] = useState({
    message: '',
  });

  let history = useHistory();
  console.log(user.params)
  const handleChange = e => {
		setNewComment({...newComment, [e.target.id]: e.target.value });
	};

  const handleSubmit = async e => {
    console.log(loggedInUser, "loggedInUser")
		e.preventDefault();
		try {
			const response = await fetch(`https://noetic-talk.herokuapp.com/api/blogs/${match.params.id}/addComment`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({...newComment, username: loggedInUser})
			});

			const data = await response.json();

			props.setComments([...props.comments, data]);
      console.log(props.comments, "comments")
			setNewComment({
				message: '',
			});
      history.push(`/${match.params.id}`)
		} catch (error) {
			console.error(error);
		}
	};




  return(
    <form onSubmit={handleSubmit}>
			<input
				type="text"
				id="message"
				value={newComment.message}
				onChange={handleChange}
        placeholder="Add a comment"
			/>
      <button type="submit">
				+ Add
			</button>
		</form>

  )
}
