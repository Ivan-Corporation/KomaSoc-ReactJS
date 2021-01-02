import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='I love Sabaton!!!' likes='20' />
                <Post message='Hey?! I here alone?' likes='2' />
                <Post message='Okay...' likes='7' />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;