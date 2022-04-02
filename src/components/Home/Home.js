import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Home = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch(' https://retro-tech-talks.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map(blog=><Blog key={blog._id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Home;