// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGwcXqxSQH3VDPiMaMYelTCpLH4m6JT-c",
  authDomain: "quiz-1f5d1.firebaseapp.com",
  projectId: "quiz-1f5d1",
  storageBucket: "quiz-1f5d1.appspot.com",
  messagingSenderId: "761343395792",
  appId: "1:761343395792:web:6b3c667434208c7d019bd5",
  measurementId: "G-3B8XL83CNM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();



var addques = document.getElementById('question');
var addans = document.getElementById('answer');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');



window.add = function (e){
    e.preventDefault();
    var obj = {
      question : addques.value,
      options:`["${opt1.value}","${opt2.value}","${opt3.value}","${opt4.value}"]`,
      correctAns : addans.value,
  
    }
    const refKey = ref(database, `Ques/`);
    obj.id = push(refKey).key;
  
    const reference = ref(database, `Ques/${obj.id}/`);
    set(reference, obj);
    addques.value = "";
    addans.value = "";
    opt1.value = "";
    opt2.value = "";
    opt3.value = "";
    opt4.value = "";
}