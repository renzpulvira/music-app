import * as firebase from "firebase";

const fire = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIRE_API,
  authDomain: "music-player-app-591df.firebaseapp.com",
  databaseURL: "https://music-player-app-591df.firebaseio.com",
  projectId: "music-player-app-591df",
  storageBucket: "music-player-app-591df.appspot.com",
  messagingSenderId: "583301045069",
  appId: "1:583301045069:web:79874a9589879e3ccff504",
  measurementId: "G-FS2L5M9JV5",
});

export default fire;
