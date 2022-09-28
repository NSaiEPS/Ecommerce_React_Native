import * as firebase from 'firebase/compat';
// import 'firebase/compat/auth';
import  "firebase/auth";
import  "firebase/firestore";
// import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCXgPMGJNdlqya2JaDjLRhjoEwkpRqsLzQ",
    authDomain: "ecommerce-react-native-38211.firebaseapp.com",
    projectId: "ecommerce-react-native-38211",
    storageBucket: "ecommerce-react-native-38211.appspot.com",
    messagingSenderId: "297139660482",
    appId: "1:297139660482:web:44552c147ca99ac04bbd5b",
    measurementId: "G-F7F8BSV69Y"
  };


let app;
if(firebase.apps.length===0){


app=firebase.initializeApp(firebaseConfig)
}
else {
  app=firebase.app()
}

const db=app.firestore()
const auth=firebase.auth()
// const provider= new firebase.auth.GoogleAuthProvider();

export  {db,auth};