const initialState = {
    user: {}
}

//Action Descriptors
const UPDATE_USER = 'UPDATE_USER';

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return {...state, user: action.payload};

        default:
            return state;
    }
}

//Action Builders
export function updateUser (value) {
    return {
        type: UPDATE_USER,
        payload: value
    }
}