import {LOG_IN, LOG_OUT} from '../Actions'


const initState = {
    uid: null,
}

export default function authReducer(state = initState,action) {
    switch(action.type) {
        case LOG_IN:
            return Object.assign({},state,{
                
            });
            break;
        case LOG_OUT:
            return {};
            break;
        default:
            return state;
    }
}


