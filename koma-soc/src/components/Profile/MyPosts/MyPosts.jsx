import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = [
        { id: 1, message: 'I love Sabaton!!!', likesCount: 20 },
        { id: 2, message: 'Hey?! I here alone?', likesCount: 12 },
        { id: 3, message: 'Okay...', likesCount: 0 },
    ]

    let postsElements = posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount} />);


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