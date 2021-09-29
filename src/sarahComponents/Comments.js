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
          <li key={comment._id} style={{listStyleType: "none"}}>
            <div className="card">
            <div className="card-body">
                  <p className="card-message">
                    {comment.message}
                  </p>
                  <p>{comment.createdAt}</p>
                  <p className="card-author"><img  src='/img/01103.jpg' border-radius='30px' width='25px'></img>
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
