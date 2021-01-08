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


    // [
    //     { id: 1, photoUrl: 'https://i.pinimg.com/736x/0f/0c/23/0f0c23b71d75c9c00a5813808b65d2f0--warhammer-k-memes-warhammer-.jpg', followed: false, fullName: 'IvanKoma', status: 'Giraffes are heartless creatures', location: { city: 'AS', country: 'Russia' } },
    //     { id: 2, photoUrl: 'http://epicau.com/wp/wp-content/uploads/2017/01/eldarfarseer-564x430.jpg', followed: true, fullName: 'Dancha', status: 'broken legs...', location: { city: 'Volgograd', country: 'Russia' } },
    //     { id: 3, photoUrl: 'https://i.pinimg.com/236x/aa/79/e5/aa79e5ae7f9f8016ab9f2e6b5b36862b.jpg', followed: false, fullName: 'Alex', status: 'Warhammer 40000 best!', location: { city: 'AS', country: 'Russia' } },
    //     { id: 4, photoUrl: 'http://www.angel-spire.com/forum/uploads/monthly_12_2019/post-359-1575826066.png', followed: true, fullName: 'Churchill', status: 'Dead', location: { city: 'London', country: 'Great Britain' } },

    // ]




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