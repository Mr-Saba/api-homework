import {GET_USER, GET_POST, GET_COMMENT, GET_TODO, GET_CATEGORY, GET_PRODUCT} from "./constants"

const initialState = {
    Users: [],
    Posts: [],
    Comments: [],
    Todos: [],
    Categories: [],
    Products: [],
}

const Reducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_USER: return {
            ...state,
            Users: action.payload
        }
        case GET_POST: return {
            ...state,
            Posts: action.payload
        }
        case GET_COMMENT: return {
            ...state,
            Comments: action.payload
        }
        case GET_TODO: return {
            ...state,
            Todos: action.payload
        }
        case GET_CATEGORY: return {
            ...state,
            Categories: action.payload
        }
        case GET_PRODUCT: return {
            ...state,
            Products: action.payload
        }
        default: return state
    }
}

export default Reducer