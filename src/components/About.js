import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Profile from './Profile';


function About() {
  return (
    <div>
     <h2>About Us</h2>
     <h3>This Is Food Villa About Page</h3> 

    <Link to='profile'>
    <button>View Profile</button>
    </Link> 
   
     <Profile />
      </div>
  )
}

export default About
