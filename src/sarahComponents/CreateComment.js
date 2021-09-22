import React, { useState, useEffect } from 'react';

export default function CreateComment({user, comments, setComments, loggedInUser}) {
  const [comment, setComment] = useState({
    message: '',
  });
  // const [newComment, setNewComment] = useState({
  //   name: `${loggedInUser}`,
  //   message:
  // })

  const handleChange = e => {
		setComment({...comment, [e.target.id]: e.target.value });
	};

  const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/comments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(comment)
			});
			const data = await response.json();
			setComments([...comments, data]);
			setComment({
				message: '',
			});
		} catch (error) {
			console.error(error);
		}
	};


  return(
    <div>
			<input
				type="text"
				id="comment"
				value={user.comment}
				onChange={handleChange}
			/>
      <button type="submit">
				Add comment
			</button>
		</div>

  )
}
