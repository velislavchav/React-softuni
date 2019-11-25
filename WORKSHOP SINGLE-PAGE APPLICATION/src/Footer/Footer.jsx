import React from 'react';
import './Footer.css';
import Link from '../shared/Link/Link';


function Footer (){
    return <nav className="Footer">
        <ul>
          <Link to ="/">
              <img id='logo' src='logo192.png' alt="my-app-logo"/>
          </Link>
          <Link to ="/">Posts</Link>
          <Link to ="/create-posts">New Post</Link>
          <Link to ="/profil">Profil</Link>
          <Link to ="/login">Login</Link>
          <Link to ="/register">Register</Link>
        </ul>
    </nav>;
};

export default Footer