// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getDatabase, push ,ref, set,onChildAdded } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";


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

const questions = [];

function getdata(){

var dataRef = ref(database , 'Ques/');
  onChildAdded(dataRef, function(data){
   questions.push({ question: data.val().question , options: JSON.parse(data.val().options) , correctAns: data.val().correctAns})
  //  setTimeout(() => { init(); }, 1000);
  init()
})

}
getdata();


console.log(questions)
console.log(questions[0])

var ques = [
  {
    question: "Html Stands For ________________________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For _______________________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For _______________________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For _______________________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For _______________________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For _______________________",
    options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
    correctAns: "Read Only Memory",
  },
];
// console.log(ques)
var dispques = document.getElementById("dispques");
var qno = document.getElementsByClassName("qn");
var options = document.getElementById("options");
var result = document.getElementById("result");
var showscore = document.getElementById("showscore");
var showpr = document.getElementById("showpr");
var showstatus = document.getElementById("showstatus");



var currIndex = 0;

function init() {
  qno[1].innerHTML = questions.length;
  qno[0].innerHTML = currIndex + 1;
  dispques.innerHTML = questions[currIndex].question;

  options.innerHTML = "";
  for (var i = 0; i < questions[currIndex].options.length; i++) {
    options.innerHTML += `<div class="mt-2 col-md-6">
        <button onclick="check('${questions[currIndex].options[i]}','${questions[currIndex].correctAns}')" class=" mx-auto d-block w-100 rounded-pill btn btn btn-outline-success">
         ${questions[currIndex].options[i]}
        </button>`;
  }
}


var score = 0;

function showresult() {
  result.style.display = "flex";
  showscore.innerHTML = score;
  var per = (score / questions.length) * 100;
  per = per.toFixed(2);
  showpr.innerHTML = per;
  if (per >= 50) {
    showstatus.innerHTML = "Passed !";
  } else {
    showstatus.innerHTML = "Failed !";
  }
}

function next() {
  if (currIndex + 1 == questions.length) {
    showresult();
  } else {
    currIndex++;
    init();
  }
}

window.check = function(a, b) {
  if (a === b) {
    score++;
  }
  next();
}
