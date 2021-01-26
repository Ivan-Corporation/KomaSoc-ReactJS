import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'I am new here!', likesCount: 0},
                {id: 2, message: 'It\'s my lovely site', likesCount: 0},
                {id: 3, message: 'Mmmm... i alone here?', likesCount: 1},
                {id: 4, message: 'Okay...', likesCount: 101}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Den'},
                {id: 3, name: 'Alex'},
                {id: 4, name: 'Churchill'},
                {id: 5, name: 'Anonimus'},
                {id: 6, name: 'Vitek'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Привет, говорю'},
                {id: 3, message: 'Ababa'},
                {id: 4, message: 'There is many ways to find solution on this question'},
                {id: 5, message: 'IQ 141'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
// store - OOP