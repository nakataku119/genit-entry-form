// Import the functions you need from the SDKs you need
import { UserInformation } from "@/classes/UserInformation";
import { Datastore } from "@google-cloud/datastore";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUixY6tXnwT8ehaNUkSqalP6BjOGar5II",
  authDomain: "genit-entry-form-a051a.firebaseapp.com",
  projectId: "genit-entry-form-a051a",
  storageBucket: "genit-entry-form-a051a.appspot.com",
  messagingSenderId: "313227806166",
  appId: "1:313227806166:web:04917ec13bb15543519077",
  measurementId: "G-WFE1JLD8EL",
};

// Initialize Firebase
// const { Datastore } = require("@google-cloud/datastore");
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export class PostUserInformation {
  public static async postUserInformation(params: UserInformation) {
    console.log(params);
    await addDoc(collection(getFirestore(), "entries"), params.toObject());
  }
}
