import {LOG_IN, LOG_OUT} from '../Actions'


const initState = {
    Test: "asdasdas"
}

export default function authReducer(state = initState,action) {
    switch(action.type) {
        case LOG_IN:
            return Object.assign({},state,{
                Test:'vvvvvvv'
            });
            break;
        case LOG_OUT:
            return {};
            break;
        default:
            return state;
    }
}


