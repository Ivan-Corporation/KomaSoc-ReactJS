import Preloader from '../../common/preloader/Preloader'
import classes from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import { updateStatus } from './../../../redux/profile-reducer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
           <div>
                <img
                    src='https://camo.githubusercontent.com/7bcebf946ea0560dc2deef04bf2db161f3a1f0bd1bede55527f3808ac68a3e57/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f45584c4b6f787a586b41414f5330572e6a7067' alt="Borsh"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;