const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let inititalState = {
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
}



const dialogsReducer = (state = inititalState, action) => {




    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:

            return {
                ...state,
                newMessageBody: action.body
            };




        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {

                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };




        default:
            return state;

    }

}


export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;