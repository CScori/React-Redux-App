import { } from '../actions'
const initialState = {
    gOT: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) = {
    switch(action.type) {
        case START
    return {
            ...state,
            isFetching: true,
            error: ''
    }
    case FETCH
    return {
            ...state,
            isFetching: false,
            error: ''
        gOT: action.payload
        }
    case FETCH
    return {
            ...state,
            isFetching: false,
            error: action.payload
        }
    default:
        return state
    }
}