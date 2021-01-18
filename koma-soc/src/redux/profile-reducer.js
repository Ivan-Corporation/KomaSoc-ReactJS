import store from "./store";
import { ProfileAPI, UsersAPI } from './../api/api';

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts:
        [
            { id: 1, message: 'I love Sabaton!!!', likesCount: 20 },
            { id: 2, message: 'Hey?! I here alone?', likesCount: 12 },
            { id: 3, message: 'Okay...', likesCount: 2 },
        ],
    newPostText: 'KomaCorp',
    profile: null,
    status: ""
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
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;

    }


}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})


export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})



export const getUserProfile = (userId) => (dispatch) => {
    UsersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));

    });
}


export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));

    });
}

export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(response => {
if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
}

        

    });
}


export default profileReducer;