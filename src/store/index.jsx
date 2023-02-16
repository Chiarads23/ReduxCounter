import { combineReducers, createStore } from "redux";

const initState = {
    count:{
        value:0
    },
    user:{
        userName: '',
    }
}

function counterReducer(state = {}, action) {
    switch (action.type) {
        case "INCR":
            return {...state, value : state.value + 1}
        case "DECR":
            return {...state, value : state.value - 1}
        default:
            return state
    }
}

function userReducer (state= {}, action) {
    switch (action.type) {
        case 'SET_USERNAME' :
            return {...state, userName: action.payload}
            default:
                return state
    }
}

const rootReducer = combineReducers({count: counterReducer, user: userReducer})


const store = createStore(rootReducer, initState);

export default store;