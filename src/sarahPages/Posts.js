import React from 'react';

export default function Posts({user, posts}){

  return(
    <div className="posts-container">
      {posts && posts.map(post => {
        return (
          <li key={post._id}>
            <div className="card">
            <div className="card-body">
                  <h3 className="card-topic">{post.topic}</h3>
                  <p className="card-title">
                    {post.title}
                  </p>
                  <p className="card-body">
                    {post.body}
                  </p>
                  <p className="card-author">
                    author: {user.username}
                  </p>
              </div>
            </div>
          </li>
        )
      })}
    </div>
  )
}
