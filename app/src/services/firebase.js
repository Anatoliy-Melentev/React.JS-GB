// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB40YaZR4kWAQvRiCl5_n6kxb1Sx8EPM_M",
	authDomain: "chats-gb-data.firebaseapp.com",
	projectId: "chats-gb-data",
	storageBucket: "chats-gb-data.appspot.com",
	messagingSenderId: "286493724065",
	appId: "1:286493724065:web:0a6610ce37a9f7f6c48fe0",
	measurementId: "G-S41CZN2DGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const signUp = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
export const logIn = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
export const logOut = () => signOut(auth);

export const db = getDatabase(app);
export const profileRef = ref(db, 'profile');
export const getUserByRef = (uid) => ref(db, `profile/${uid}`);
export const getUserNameByRef = (uid) => ref(db, `profile/${uid}/name`);
export const getUserShowNameByRef = (uid) => ref(db, `profile/${uid}/showName`);
export const getUserAvatarByRef = (uid) => ref(db, `profile/${uid}/avatar`);

export const chatsRef = ref(db, 'chats');
export const getChatsRefById = (chatId) => ref(db, `chats/${chatId}`);
export const getChatsLastMsgRefById = (chatId) => ref(db, `chats/${chatId}/LastMsg`);

export const messagesRef = ref(db, "messages");
export const getMessageListRefByChatId = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
export const getMessageRefById = (chatId, msgId) => ref(db, `messages/${chatId}/messageList/${msgId}`);
export const getMessageTextRefById = (chatId, msgId) => ref(db, `messages/${chatId}/messageList/${msgId}/text`);
