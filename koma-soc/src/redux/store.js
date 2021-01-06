import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {
    _state: {

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Ivanych' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Danila' },
                { id: 4, name: 'Churchill' },
                { id: 5, name: 'Anonim' },
                { id: 6, name: 'Boriska' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Priv' },
                { id: 3, message: 'mda...' },
                { id: 4, message: ':)' },
                { id: 5, message: 'You are in danger' },
                { id: 6, message: 'I Boriska)' },
            ],
            newMessageBody: ""
        },

        profilePage: {
            posts:
                [
                    { id: 1, message: 'I love Sabaton!!!', likesCount: 20 },
                    { id: 2, message: 'Hey?! I here alone?', likesCount: 12 },
                    { id: 3, message: 'Okay...', likesCount: 2 },
                ],
            newPostText: 'KomaCorp'

        },
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // Pattern OBSERVER
    },

    _callSubscriber() {

    },






    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },



};










window.store = store;

export default store;