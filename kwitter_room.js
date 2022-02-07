
var firebaseConfig = {
      apiKey: "AIzaSyCEMQ2ZJI6y45gZ4wXu23y1p9iwR8cdRzw",
      authDomain: "kwitter-db1e3.firebaseapp.com",
      databaseURL: "https://kwitter-db1e3-default-rtdb.firebaseio.com",
      projectId: "kwitter-db1e3",
      storageBucket: "kwitter-db1e3.appspot.com",
      messagingSenderId: "918857964514",
      appId: "1:918857964514:web:b7ae6fe7169dcdb5c3f7bb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "@";
    
    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({
          purpose:"adding room_name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name: "+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomname(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}