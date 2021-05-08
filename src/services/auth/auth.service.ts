import firebase from "firebase/app";

export const loginRequest = (email: string, password: string) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};
