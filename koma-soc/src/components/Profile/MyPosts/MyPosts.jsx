import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {



    let postsElements = props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />);


    return (
        <div className={classes.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea>New Post</textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;