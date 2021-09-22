import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

export default function CreatePost({user, posts, setPosts, match}) {
	const [newPost, setNewPost] = useState({
		 username: '',
		 topic: '',
	   title: '',
     body: '',

	});



	let history = useHistory();

  const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('https://noetic-talk.herokuapp.com/api/blogs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(newPost)
			});
			const data = await response.json();
			setPosts([...posts, data]);
			setNewPost({
				username: '',
        topic: '',
        title: '',
        body: '',
			});
			console.log(data._id)
			history.push(`/${data._id}`)
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setNewPost({ ...newPost, [e.target.id]: e.target.value });
	};

  return (
  		<div className="CreateComponent container">

  			<div>
  				<form onSubmit={handleSubmit} className="create-form">
          	<div className="mb-3 form-floating">
            	<input
	              type="text"
	              id="topic"
	              value={newPost.topic}
	              onChange={handleChange}
	              className="topic-input form-control"
	              name="floatingTopic"
	              placeholder="Topic"
            	/>
            <label htmlFor="floatingTitle">Topic</label>
          </div>

  					<div className="mb-3 form-floating">
  						<input
  							type="text"
  							id="title"
  							value={newPost.title}
  							onChange={handleChange}
  							className="title-input form-control"
  							name="floatingTitle"
  							placeholder="Title"
  						/>
  						<label htmlFor="floatingTitle">Title</label>
  					</div>

						<div className="mb-3 form-floating">
  						<input
  							type="text"
  							id="author"
  							defaultValue={user.username}
  							placeholder="Author"
								name="floatingAuthor"
  						/>
  						<label htmlFor="floatingAuthor">Title</label>
  					</div>

  					<div className="mb-3 form-floating">
  						<input
  							type="text"
  							id="body"
  							value={newPost.body}
  							onChange={handleChange}
  							className="body-input form-control"
  							name="floatingBody"
  							placeholder="Content"
  						/>
  						<label htmlFor="floatingBody">Content</label>
  					</div>
  					<div className="mb-3 form-floating">
  						<input
  							type="checkbox"
  							id="sensitiveContentWarning"
  						/>
  						<label htmlFor="floatingCheckbox">Sensitive content disclaimer</label>
  					</div>

  					<button className="btn btn-primary mb-3" type="submit">
  						Submit
  					</button>
  				</form>
  			</div>
  		</div>
  	);
  }
