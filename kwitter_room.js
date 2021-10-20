
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCgo19yPDGil9KMosSmS1-ZdvZCd3-8TME",
      authDomain: "kwitter-d6afc.firebaseapp.com",
      databaseURL: "https://kwitter-d6afc-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6afc",
      storageBucket: "kwitter-d6afc.appspot.com",
      messagingSenderId: "409077932215",
      appId: "1:409077932215:web:45deeb887fd80734016d32",
      measurementId: "G-WE4BRHVPRV"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
    function addroom() {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
               purpose:"Adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}