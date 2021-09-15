import React, { useState } from 'react';

export default function CreatePost(props) {
	const [newPost, setNewPost] = useState({
		 username: '',
		 topic: '',
	   title: '',
     body: '',
     comments: ''
	});

  const handleSubmit = async e => {
    //Where do I check to make sure the checkbox below was ticked? So they cannot post without
    //ticking the box.
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
			props.setPost([...props.posts, data]);
			setNewPost({
        topic: '',
        title: '',
        body: '',
        createdAt: //some method???
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = e => {
		setNewPost({ ...newPost, [e.target.id]: e.target.value });
	};

  return (
  		<div className="CreateComponent container">
  			<p>
  				Create a Post
  			</p>
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
  							id="username"
  							value={props.username}
  							className="form-control"
  							name="floatingUsername"
  							placeholder={props.username}
  						/>
  						<label htmlFor="floatingDescription">User Name</label>
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
