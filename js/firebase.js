// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAOYJTxTnzyI5n74XVGnMEvxX4whjzeCM0",
	authDomain: "tictactoe-408c3.firebaseapp.com",
	projectId: "tictactoe-408c3",
	storageBucket: "tictactoe-408c3.appspot.com",
	messagingSenderId: "455684682761",
	appId: "1:455684682761:web:865b7936e17125470174d8",
	measurementId: "G-J6LM93PD36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// to be done later if i want to add multiplayer
