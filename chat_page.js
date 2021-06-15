// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAo_DsJN_ZdbuRsJCnSVnVjeLJFKGPMIs4",
    authDomain: "lets-chat-51106.firebaseapp.com",
    databaseURL: "https://lets-chat-51106-default-rtdb.firebaseio.com",
    projectId: "lets-chat-51106",
    storageBucket: "lets-chat-51106.appspot.com",
    messagingSenderId: "336836363621",
    appId: "1:336836363621:web:9ae53b06cb19fb25c5cd8c",
    measurementId: "G-FYFG7PEL5R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

function addUser() {
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"Adding room name"});
}
