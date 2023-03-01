import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBCMbfcMb83xkVRf4aHsiYEmIZ4nwEofeU",
  authDomain: "weblogin-2bdfd.firebaseapp.com",
  databaseURL: "https://weblogin-2bdfd.firebaseio.com",
  projectId: "weblogin-2bdfd",
  storageBucket: "weblogin-2bdfd.appspot.com",
  messagingSenderId: "598547505129",
  appId: "1:598547505129:web:5d6d037e3803a3b9e5b578",
  measurementId: "G-CGNS9F6BNL"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)