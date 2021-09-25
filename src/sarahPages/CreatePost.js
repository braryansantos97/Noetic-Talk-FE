import React, { useState, useContext, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {context} from '../sarahComponents/context';

export default function CreatePost(props) {

	const {user, posts, setPosts, loggedInUser, token, setToken, setLoggedInUser} = useContext(context)

	const [newPost, setNewPost] = useState({
		 topic: '',
	   title: '',
     body: '',

	});


	let history = useHistory();

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
			setLoggedInUser(window.localStorage.getItem('loggedInUser'));
		}
	}, []);

  const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('https://noetic-talk.herokuapp.com/api/blogs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({...newPost, username: loggedInUser})
			});
			const data = await response.json();
			setPosts([...posts, data]);
			setNewPost({
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

					<div>
					{token ? (
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

					):(
						<p>Please login or sign up above</p>
					)}
					</div>
  			</div>
  		</div>
  	);
  }
