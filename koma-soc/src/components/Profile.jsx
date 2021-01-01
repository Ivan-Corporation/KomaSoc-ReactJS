import classes from './Profile.module.css'

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='http://img.crazys.info/files/i/2012.5.22/1337696897_space-66.jpg' />
        </div>
        <div>
            <img src='https://image.winudf.com/v2/image/Y29tLmVuZ2luYWlyLmNvb2xjYXR3YWxscGFwZXJfc2NyZWVuXzJfMTUyNzI5OTk2OF8wMDA/screen-2.jpg?fakeurl=1&type=.jpg' />
        </div>
        <div className={classes.posts}>
            My posts
      <div>
                New post
      </div>
            <div className={classes.item}>
                post 1
      </div>
            <div className='item'>
                post 2
      </div>
        </div>
    </div>
}

export default Profile;