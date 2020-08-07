import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  //   apiKey: "",
  //   authDomain: "",
  //   databaseURL: "",
  //   projectId: "",
  //   storageBucket: "",
  //   messageSenderId: "",
  //   apiId: "",

  apiKey: "AIzaSyDrN5o35LX0dE7XxjR6VGQjn_5vbXI1cMw",
  authDomain: "todoist-clone-9260c.firebaseapp.com",
  databaseURL: "https://todoist-clone-9260c.firebaseio.com",
  projectId: "todoist-clone-9260c",
  storageBucket: "todoist-clone-9260c.appspot.com",
  messagingSenderId: "848453984386",
  appId: "1:848453984386:web:b24389759fa8d4fe5e549b",
  // measurementId: "G-Y8KRPQWB04"
});

export { firebaseConfig as firebase };
