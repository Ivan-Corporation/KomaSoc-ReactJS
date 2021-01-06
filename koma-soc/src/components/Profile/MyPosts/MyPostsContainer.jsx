
import React from 'react'
import { addPost, addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());

    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }


    return (

        <MyPosts
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            addPost={addPost}
            newPostText={state.profilePage.newPostText}

        />
    )
}

export default MyPostsContainer;