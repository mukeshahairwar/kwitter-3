//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCSArGHTmrYTNRbWPqx53X2RgCAUwLFqX4",
    authDomain: "kwitter-fa700.firebaseapp.com",
    databaseURL: "https://kwitter-fa700-default-rtdb.firebaseio.com",
    projectId: "kwitter-fa700",
    storageBucket: "kwitter-fa700.appspot.com",
    messagingSenderId: "963774968814",
    appId: "1:963774968814:web:d78637b7b6d8856fd754ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
  });
}

getData();

function redirectToRoomName(name) {
  console.log(name);

  localStorage.setItem("room_name", name);

  window.location = "kwitter_page.html";
}