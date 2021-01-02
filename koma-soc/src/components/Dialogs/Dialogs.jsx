import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <NavLink to={path}> {props.name} </NavLink>
    </div>
}

const Message = (props) => {

    return <div className={classes.dialog}> {props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name='Ivan' id='1' />
                <DialogItem name='Alex' id='2' />
                <DialogItem name='Danila' id='3' />
                <DialogItem name='Churchill' id='4' />
                <DialogItem name='Anonim' id='5' />
                <DialogItem name='Boriska' id='6' />
            </div>

            <div className={classes.messages}>
                <Message message="Hello!" />
                <Message message="Okay..." />
                <Message message="I dono OMEGALUL" />
            </div>
        </div>
    )
}

export default Dialogs;