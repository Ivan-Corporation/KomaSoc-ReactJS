import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import { addPost, updateNewPostText } from './../../redux/state';

const Profile = (props) => {

    return (
        <div>

            <ProfileInfo />
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}

            />
        </div>
    )
}

export default Profile;