import {firebase, googleAuthProvider} from '../Firebase/fbConfig'


export const LOG_IN = "LOG_IN"
export const LOG_OUT = "LOG_OUT"

export const login =(uid) => ({
    type: LOG_IN,
    uid
});

export const logout =() =>({
    type: LOG_OUT
});

export const firebaseLogin = () => {
    return (dispath) => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
};

export const firebaseLogout = () => {
    return (dispath) => {
        return firebase.auth().signOut();
    }
};