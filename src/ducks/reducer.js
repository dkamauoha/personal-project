const initialState = {
    user: {}
}

//Action Descriptors
const UPDATE_INPUT = 'UPDATE_INPUT';

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_INPUT:
            return {...state, user: action.payload};

        default:
            return state;
    }
}

//Action Builders
export function updateInput (value) {
    return {
        type: UPDATE_INPUT,
        payload: value
    }
}