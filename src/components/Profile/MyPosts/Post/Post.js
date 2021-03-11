import React from 'react';
import posts from './Post.module.css'

const Post = (props) => {
    return (
        <div className={posts.item}>
            <img src="https://i.pinimg.com/236x/5b/53/86/5b5386252d79fee53a3e62c0276b1b08.jpg" alt=""/>
                {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );

}

export default Post;