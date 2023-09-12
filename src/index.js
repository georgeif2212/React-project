import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import App from './App';


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsaHGZPzCD7C2saYAKeeiW0ePH8AXKUzs",
  authDomain: "proyectocoder-3c7ad.firebaseapp.com",
  projectId: "proyectocoder-3c7ad",
  storageBucket: "proyectocoder-3c7ad.appspot.com",
  messagingSenderId: "659905375299",
  appId: "1:659905375299:web:050cbb99c394914f53f8f6"
};

// ! Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
