import { initializeApp } from "firebase/app";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlmqDP89uY3SLR_LqyuIQuotmhUGoaGVM",
    authDomain: "smartbrief-94f4e.firebaseapp.com",
    projectId: "smartbrief-94f4e",
    storageBucket: "smartbrief-94f4e.firebasestorage.app",
    messagingSenderId: "584959034396",
    appId: "1:584959034396:web:ed160d624f953009518bd9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth };

export default app;
