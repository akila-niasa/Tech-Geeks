import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Videos from './components/Videos/Videos';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import { createContext, useState } from 'react';

export const BlogContext=createContext()


function App() {
  const [blogs,setBlogs]=useState([])

  return (

<div className='App'>
      <Navbar></Navbar>
    <BlogContext.Provider value={[blogs,setBlogs]}>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/videos' element={<Videos/>}></Route>
     <Route path='/blog/:id' element={<BlogDetails/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BlogContext.Provider>
    </div>

  );
}

export default App;
