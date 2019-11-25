import React from 'react';
import './Posts.css';
import Post from './Post/Post';
import postService from '../../services/post-service'



// function Posts (){
//     return <div className="Posts">
//        <Post imageUrl = "/logo192.png" imageAlt="alt" author="Me">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum doloremque repudiandae commodi, eveniet iusto! Repellat quibusdam laboriosam perspiciatis, temporibus at id soluta maiores vel quod est tempore facere itaque.</Post>
//     </div>;
// };

class Posts extends React.Component{
    state = {
        posts: null
    };

    componentDidMount(){
        postService.load().then(posts => {
            this.setState({ posts })
        })
    }

    render() {
        const {posts} = this.state;
        return  posts ? <div className="Posts">
            {posts.map((post) => <Post key={post.id} imageUrl="/logo192.png" imageAlt="alt" author={post.userId}>{post.body}</Post>)}
        </div> : <div>Loading...</div>;
    }
}   

export default Posts
