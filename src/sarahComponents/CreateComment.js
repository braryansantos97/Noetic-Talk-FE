import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

export default function CreateComment({user, comments, setComments, loggedInUser, match}) {
  const [newComment, setNewComment] = useState({
    message: '',
  });
  // const [newComment, setNewComment] = useState({
  //   name: `${loggedInUser}`,
  //   message:
  // })
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

			setComments([...comments, data]);
      console.log(comments, "comments")
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
