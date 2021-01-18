import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react'




const MyPosts = (props) => {


    let postsElements = props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />);



    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>

                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;