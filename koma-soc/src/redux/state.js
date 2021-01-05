const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },



};

export const addPostActionCreator = () => ({
    type: 'ADD-POST',
})

export const updateNewPostTextActionCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: text
})







window.store = store;

export default store;