import firebase from "firebase/compat/app";
import "firebase/compat/database"

const config = {
  apiKey: "AIzaSyCrUs1i64l7wb4l4lXyU1gHE5eu6_8AoNc",
  authDomain: "firechat-vue-2b194.firebaseapp.com",
  projectId: "firechat-vue-2b194",
  storageBucket: "firechat-vue-2b194.appspot.com",
  messagingSenderId: "52301708135",
  appId: "1:52301708135:web:3d6fce60c5a672015f4dc2"
};

const db = firebase.initializeApp(config);
export default db;