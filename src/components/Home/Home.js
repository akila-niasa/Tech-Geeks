import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../App';
import Blog from '../Blog/Blog';

const Home = () => {
    const[blogs,setBlogs]=useContext(BlogContext)
    useEffect(()=>{
        fetch(' data.json')
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