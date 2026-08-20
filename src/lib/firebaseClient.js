import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const rawEnv = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const missingKeys = Object.entries(rawEnv)
  .filter(([, val]) => !val)
  .map(([key]) => key)

if (missingKeys.length > 0) {
  console.warn(
    `[Firebase Warning] Missing environment variables: ${missingKeys.join(', ')}. `
    + 'Please add VITE_FIREBASE_* variables in your Netlify site settings.',
  )
}

const firebaseConfig = {
  apiKey: rawEnv.apiKey || 'AIzaSyDemoPlaceholderKeyForInitialization',
  authDomain: rawEnv.authDomain || 'demo-app.firebaseapp.com',
  projectId: rawEnv.projectId || 'demo-app',
  storageBucket: rawEnv.storageBucket || 'demo-app.appspot.com',
  messagingSenderId: rawEnv.messagingSenderId || '100000000000',
  appId: rawEnv.appId || '1:100000000000:web:demo',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)