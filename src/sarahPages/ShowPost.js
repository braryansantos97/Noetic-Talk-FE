import React, {useState, useEffect} from 'react';


export default function ShowPost({user}) {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
		(async () => {
			try {

				const response = await fetch(`https://noetic-talk.herokuapp.com/api/blogs/${props.match.params.id}`);
				const data = await response.json();
				setPost(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

  // const fetchComment = async () => {
  // 		try {
  // 			const response = await fetch(`/api/blogs/comments`);
  // 			const data = await response.json();
  // 			setComments(data);
  // 		} catch (error) {
  // 			console.error(error);
  // 		}
  // 	};

//need a handleChange, handleSubmit but JUST for the comments????

// const handleSubmit = async e => {
// 		e.preventDefault();
// 		try {
// 			const response = await fetch('https://noetic-talk.herokuapp.com/api/blogs', {
// 				method: 'POST',
// 				headers: {
// 					'Content-Type': 'application/json'
// 				},
// 				body: JSON.stringify(post)
// 			});
// 			const data = await response.json();
// 			setPost([...post, data]);
// 			setPost({
// 				comments: ''
// 			});
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
//
// const handleChange = e => {
// 		setPost({ ...post, [e.target.id]: e.target.value });
// 	};

//Want to show:
//Title, username, time & date, content, comment input + button, comments

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
