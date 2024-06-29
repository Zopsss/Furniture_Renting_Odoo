// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhPQugQRM2o87s9JvN3o0P6fQlknMg__M",
  authDomain: "furniture-renting-odoo.firebaseapp.com",
  databaseURL: "https://furniture-renting-odoo-default-rtdb.firebaseio.com",
  projectId: "furniture-renting-odoo",
  storageBucket: "furniture-renting-odoo.appspot.com",
  messagingSenderId: "257307050937",
  appId: "1:257307050937:web:eaa8ccd04146c005d36c68",
  measurementId: "G-6X367646W2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
