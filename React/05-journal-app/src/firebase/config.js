// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCIh_pUrQTmInaEzwGvFjCucEBrrimk7Cg',
	authDomain: 'react-cursos-df5f9.firebaseapp.com',
	projectId: 'react-cursos-df5f9',
	storageBucket: 'react-cursos-df5f9.appspot.com',
	messagingSenderId: '325252295691',
	appId: '1:325252295691:web:6cb4e7f29c9fcf789b2b0e',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
