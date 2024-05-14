/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push } from "firebase/database"; // Add this line to import Realtime Database functions

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIpvVAoem3RBq_5rL2mmuVEGgakbXt5_U",
  authDomain: "kalmen.firebaseapp.com",
  databaseURL: "https://kalmen-default-rtdb.firebaseio.com",
  projectId: "kalmen",
  storageBucket: "kalmen.appspot.com",
  messagingSenderId: "889174666338",
  appId: "1:889174666338:web:e7e4916ffced9c6131753b",
  measurementId: "G-NHHY5709EC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Add this line to get a reference to the Firebase Realtime Database

document.querySelector("button").addEventListener("click", function () {
  const incomeDate = document.getElementById("incomeDate").value;
  const category = document.getElementById("category").value;
  const supplier = document.getElementById("supplier").value;
  const classType = document.getElementById("class").value;
  const account = document.getElementById("account").value;
  const amount = document.getElementById("amount").value;
  const customer = document.getElementById("customer").value;
  const item = document.getElementById("item").value;
  const notes = document.getElementById("notes").value;

  // Push data to Firebase
  push(ref(database, "incomes"), {
    // Use ref() to get a reference to the "incomes" node in the database
    incomeDate: incomeDate,
    category: category,
    supplier: supplier,
    classType: classType,
    account: account,
    amount: amount,
    customer: customer,
    item: item,
    notes: notes,
  });
});
*/