import { firebase, googleAuthProvider } from '../Firebase/fbConfig'


export const SET_AUTH = "SET_AUTH"
export const LOG_OUT = "LOG_OUT"

export const setAuth = (user, token) => ({
    type: SET_AUTH,
    user,
    token
});

export const logout = () => ({
    type: LOG_OUT
});

export const firebaseLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then(res => dispatch(setAuth(res.user,res.credential.token)));
    }
};

export const firebaseLogout = () => {
    return (dispatch) => {
        return firebase.auth().signOut().then(res => dispatch(logout()));
    }
};