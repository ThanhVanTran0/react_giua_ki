import {SET_AUTH, LOG_OUT} from '../Actions'


const initState = {
    user: null,
    token: null
}

export default function authReducer(state = initState,action) {
    switch(action.type) {
        case SET_AUTH:
            return Object.assign({},state,{
                user: action.user,
                token: action.token,
            });
            break;
        case LOG_OUT:
            return Object.assign({},state,{
                user: null,
                token: null,
            });;
            break;
        default:
            return state;
    }
}


