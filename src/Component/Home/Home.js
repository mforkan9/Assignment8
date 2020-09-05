import React, { useState, useEffect } from 'react';
import List from '../ListItem/List';
import './Home.css'
const Home = () => {
    const [list,setList] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setList(data))
    },[])
    return (
        <div className='main-home'>
           {
               list.map(prn => <List list={prn}></List>)
           }
        </div>
    );
};

export default Home;