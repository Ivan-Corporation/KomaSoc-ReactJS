import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Ivanych' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Danila' },
        { id: 4, name: 'Churchill' },
        { id: 5, name: 'Anonim' },
        { id: 6, name: 'Boriska' },
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Priv' },
        { id: 3, message: 'mda...' },
        { id: 4, message: ':)' },
        { id: 5, message: 'You are in danger' },
        { id: 6, message: 'I Boriska)' },
    ]



    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);



    let messagesElements = messagesData.map(message => <Message message={message.message} />);




    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;