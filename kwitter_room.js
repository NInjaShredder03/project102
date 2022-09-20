// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBW9cOx0EibPgkLSIXcRSNwMDZQF0sQbSM",
  authDomain: "twitter-b4e87.firebaseapp.com",
  databaseURL: "https://twitter-b4e87-default-rtdb.firebaseio.com",
  projectId: "twitter-b4e87",
  storageBucket: "twitter-b4e87.appspot.com",
  messagingSenderId: "462806726522",
  appId: "1:462806726522:web:e2322ea9a1abffed4bc8c3",
  measurementId: "G-BQ7QGNRZ11"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}