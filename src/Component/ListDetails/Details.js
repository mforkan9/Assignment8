import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Detail.css';
import Button from '@material-ui/core/Button';
const Details = () => {
    const {listId} = useParams();
    const [detail,setDetail] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${listId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    },[])
    return (
        <div>
            
           <div className='main-detail'>
           {/* <h2>Id No:<span>{detail.userId}</span></h2> */}
            <h1><span>{detail.title}</span></h1>
            <p><span>{detail.body}</span></p>
            <Link to={`/comment/${listId}`}><Button variant="contained" color="secondary">
  Comment
</Button></Link>
           </div>
        </div>
    );
};

export default Details;