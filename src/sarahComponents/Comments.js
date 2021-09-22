// import {useState, useEffect} from 'react';
//
// export default function Comments({user}){
//
//   const [comments, setComments] = useState([]);
//
//   useEffect((() => {
//   		(async () => {
//   			try {
//   				const response = await fetch('https://noetic-talk.herokuapp.com/api/comments');
//           const data = await response.json();
//   				setComments(data);
//   			} catch (error) {
//   				console.error(error);
//   			}
//   		})();
//   	}, []);
//
//   return (
//     <div>
//       <h3>Comments</h3>
//       <div>
//       {comments && comments.map(comment => {
//         return (
//           <li key={comment._id}>
//             <div className="card">
//             <div className="card-body">
//                   <p className="card-title">
//                     {comment.body}
//                   </p>
//                   <p className="card-author">
//                     {user.username}
//                   </p>
//               </div>
//             </div>
//           </li>
//         )
//       })}
//       </div>
//     </div>;
//   )
// }
