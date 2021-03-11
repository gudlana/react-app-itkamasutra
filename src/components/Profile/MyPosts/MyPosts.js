import React from 'react';
import myPosts from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        // props.dispatch(addPostActionCreator());
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updatePostText(text);
    }

    return (
        <div className={myPosts.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post
                    </button>
                </div>
            </div>
            <div className={myPosts.posts}>
                {postsElements}
            </div>
        </div>
    );

}
export default MyPosts;