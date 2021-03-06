import { GET_USER, GET_POST, GET_COMMENT, GET_TODO, GET_CATEGORY, GET_PRODUCT} from "./constants"

const getUser = () => async dispatch => {
    fetch("https://gorest.co.in/public-api/users")
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: GET_USER,
                payload: data.data.splice(0,10),
            })
        })
}

const getPost = () => async dispatch => {
    fetch("https://gorest.co.in/public-api/posts")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GET_POST,
            payload: data.data.splice(0,10)
        })
    })
}

const getComment = () => async dispatch => {
    fetch("https://gorest.co.in/public-api/comments")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GET_COMMENT,
            payload: data.data.splice(0,10)
        })
    })
}

const getTodo = () => async dispatch => {
    fetch("https://gorest.co.in/public-api/todos")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GET_TODO,
            payload: data.data.splice(0,10)
        })
    })
}

const getCategory = () => async dispatch => {
    fetch("https://gorest.co.in/public-api/categories")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GET_CATEGORY,
            payload: data.data.splice(0,10)
        })
    })
}

const getProduct = () => async dispatch => {
    fetch("https://gorest.co.in/public-api/products")
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: GET_PRODUCT,
            payload: data.data.splice(0,10)
        })
    })
}

    export  { getUser, getPost, getComment, getTodo, getCategory, getProduct }
