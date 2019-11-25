import React from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Main from './Main/Main';
import Aside from '../Aside/Aside';
import Posts from '../publications/Posts/Posts';
import CreatePost from '../publications/CreatePost/CreatePost';
import Footer from '../Footer/Footer';
import Loader from './Loader/Loader';
import {Route, BrowserRouter, Switch } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Loader local={true} isLoading={false} />
            <Navigation />
            <div className="Container">
              <Aside />
              <Main title="Hello!">
                <Switch>
                  <Route path='/' exact component={Posts}/>
                  <Route path='/create-posts'  component={CreatePost}/>
                </Switch>
              </Main>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
   
  );
}

export default App;
