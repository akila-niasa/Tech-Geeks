import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Blog.css'

const Blog = ({blog}) => {
    const navigate=useNavigate()
    console.log(blog.blog);
    return (
        <div className='blog-container'>
        <div className='blog-image-container'>
          <img src={blog.imageURL} alt='' />
        </div>
        <div className='blog-content'>
          <div>
            <h1>{blog.title}</h1>
            <div className='author-name'>
              <img src={blog.indicator} alt='' />
              <p>{blog.admin}</p>
            </div>
          </div>
          <p className='blog-preview'>
            {blog.blog.length < 400 ? blog.blog.length : blog.blog.slice(0, 400)}
            <span className='read-more' onClick={()=>navigate(`/blog/${blog._id}`)}>
              ...Read More
            </span>
          </p>
        </div>
      </div>
    );
};

export default Blog;