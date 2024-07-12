// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE,
  authDomain: 'blog-site-cba22.firebaseapp.com',
  projectId: 'blog-site-cba22',
  storageBucket: 'blog-site-cba22.appspot.com',
  messagingSenderId: '598402820439',
  appId: '1:598402820439:web:ed9dc79a76463b70fc3612',
  measurementId: 'G-6FBFJHQLGX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
