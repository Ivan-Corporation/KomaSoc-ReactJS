import store from "./store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts:
        [
            { id: 1, message: 'I love Sabaton!!!', likesCount: 20 },
            { id: 2, message: 'Hey?! I here alone?', likesCount: 12 },
            { id: 3, message: 'Okay...', likesCount: 2 },
        ],
    newPostText: 'KomaCorp'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };


        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,

            };

        }
        default:
            return state;

    }


}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;