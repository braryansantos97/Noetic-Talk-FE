import React, {useState, useEffect} from 'react';

export default function Comments({user, comments, loggedInUser}){





  return (
    <div>
      <h3>Comments</h3>
      <div>
      {comments && comments.map(comment => {
        return (
          <li key={comment._id}>
            <div className="card">
            <div className="card-body">
                  <p className="card-message">
                    {comment.message}
                  </p>
                  <p className="card-author">
                    {loggedInUser}
                  </p>

              </div>
            </div>
          </li>
        )
      })}
      </div>
    </div>
  )
}
