import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div>
            <img className={classes.background} src='http://img.crazys.info/files/i/2012.5.22/1337696897_space-66.jpg' />
        </div>
        <div>

            <img className={classes.avatar} src='https://image.winudf.com/v2/image/Y29tLmVuZ2luYWlyLmNvb2xjYXR3YWxscGFwZXJfc2NyZWVuXzJfMTUyNzI5OTk2OF8wMDA/screen-2.jpg?fakeurl=1&type=.jpg' />
            <div>Ava + Decsription</div>
        </div>
    </div>
}

export default ProfileInfo;