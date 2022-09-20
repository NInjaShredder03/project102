//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBW9cOx0EibPgkLSIXcRSNwMDZQF0sQbSM",
    authDomain: "twitter-b4e87.firebaseapp.com",
    databaseURL: "https://twitter-b4e87-default-rtdb.firebaseio.com",
    projectId: "twitter-b4e87",
    storageBucket: "twitter-b4e87.appspot.com",
    messagingSenderId: "462806726522",
    appId: "1:462806726522:web:e9633a9857c771fe4bc8c3",
    measurementId: "G-XXQXZXBX3H"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }