// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYA3nGefqjhMM8cdtbfk3Imu-x8zdcXUM",
  authDomain: "dataitems-614a4.firebaseapp.com",
  databaseURL: "https://dataitems-614a4-default-rtdb.firebaseio.com",
  projectId: "dataitems-614a4",
  storageBucket: "dataitems-614a4.appspot.com",
  messagingSenderId: "165117218927",
  appId: "1:165117218927:web:f854790a5c3b669b55bd9a"
};

const firebaseConfigSeondary = {
  apiKey: "AIzaSyAVdlWCWwrH3XVgUhd_emsoYnT05YBW0AU",
  authDomain: "sellerdata.firebaseapp.com",
  databaseURL: "https://sellerdata-default-rtdb.firebaseio.com",
  projectId: "sellerdata",
  storageBucket: "sellerdata.appspot.com",
  messagingSenderId: "307827857462",
  appId: "1:307827857462:web:f7e765e472cc41fb47e097"
};

// Initialize Firebase
const appsecondary = initializeApp(firebaseConfigSeondary);
const auth=getAuth(appsecondary);

const app = initializeApp(firebaseConfig,"dataitems-614a4");
const DB=getDatabase(app);
export default app;
export {auth,DB};