import React, {useState, useEffect, useContext} from 'react';
import {context} from './context';

export default function Comments(props){
  const {user, loggedInUser} = useContext(context);


  return (
    <div>
      <h3>Comments</h3>
      <div>
      {props.comments && props.comments.map(comment => {
        return (
          <li key={comment._id}>
            <div className="card">
            <div className="card-body">
                  <p className="card-message">
                    {comment.message}
                  </p>
                  <p>{comment.createdAt}</p>
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
