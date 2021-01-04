import rerenderEntireTree from "../render";

let state = {

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


}

window.state = state;

export let addPost = () => {

    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}



export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}



export default state;