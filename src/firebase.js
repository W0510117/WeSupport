import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAtwyfNCdsad1J-LvNrqEL_eYHi45CWpqI",
  authDomain: "peers-f296f.firebaseapp.com",
  projectId: "peers-f296f",
  storageBucket: "peers-f296f.firebasestorage.app",
  messagingSenderId: "1087149082402",
  appId: "1:1087149082402:web:9cbed456ef771104a6c77b",
  measurementId: "G-KY8GPHTWHN"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export default app
