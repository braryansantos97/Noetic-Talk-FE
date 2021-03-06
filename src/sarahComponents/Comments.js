import React, {useState, useEffect, useContext} from 'react';
import {context} from './context';
import { MdInsertComment } from 'react-icons/md';
import { GrDocumentTime } from 'react-icons/gr';

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
                  <MdInsertComment />{comment.message}
                  </p>
                  <p><GrDocumentTime />{comment.createdAt}</p>
                  <p className="card-author"><img  src='/img/01103.jpg' border-radius='30px' width='25px'></img>
                    {comment.username}
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
