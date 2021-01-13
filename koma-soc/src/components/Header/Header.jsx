import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    return <header className={classes.header}>
        <img src='https://pngimg.com/uploads/bulb/bulb_PNG1250.png' alt='logo' />

        <div className={classes.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;