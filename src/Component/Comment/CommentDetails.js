import React from 'react';
import './CommentDetails.css'
const CommentDetails = (props) => {
    const {id,name,body,email} = props.comments;
    return (
        <div className='main-comment'>
                <div>
                   <h3>{name}</h3>
                   <p>{body}</p> 
                </div>
        </div>
    );
};

export default CommentDetails;