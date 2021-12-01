
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDEOk9N4PC6AikUYAEtKZdjpjihWNh1MF0",
      authDomain: "kwitter-2e0a8.firebaseapp.com",
      databaseURL: "https://kwitter-2e0a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e0a8",
      storageBucket: "kwitter-2e0a8.appspot.com",
      messagingSenderId: "312879003274",
      appId: "1:312879003274:web:8157f36ddff539d1709f73"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
