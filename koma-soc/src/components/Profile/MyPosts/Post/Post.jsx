import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={classes.item}>
                <img src='https://image.winudf.com/v2/image/Y29tLmVuZ2luYWlyLmNvb2xjYXR3YWxscGFwZXJfc2NyZWVuXzJfMTUyNzI5OTk2OF8wMDA/screen-2.jpg?fakeurl=1&type=.jpg' />
                {props.message}
                <div>
                    <span>Likes:</span>  {props.likes}
                </div>
            </div>
        </div>
    )
}

export default Post;