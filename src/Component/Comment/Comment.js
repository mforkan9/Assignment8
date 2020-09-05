import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetails from './CommentDetails';

const Comment = () => {
    const {commentId} = useParams()
    const [comment,setComment] = useState([])
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${commentId}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
    return (
        <div>
            {
                comment.map(cm => <CommentDetails comments={cm}></CommentDetails>)
            }
        </div>
    );
};

export default Comment;