import React from 'react';
import './Navigation.css';
import Link from '../shared/Link/Link';



function Navigation (){
    return <nav className="Navigation">
        <ul>
          <Link to ="/">
              <img id='logo' src='logo192.png' alt="my-app-logo"/>
          </Link>
          <Link to ="/">Posts</Link>
          <Link to ="/create-posts">New Post</Link>
        </ul>
    </nav>;
};

export default Navigation