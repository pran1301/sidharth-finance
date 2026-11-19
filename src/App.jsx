import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './services/firebase'
import Login from './pages/Login'
import LoadStartingData from './pages/LoadStartingData'

function App() {
  const [user, setUser] = useState(null)         // the logged-in user (or null)
  const [checking, setChecking] = useState(true) // true while Firebase checks

  // Runs once when the app opens: Firebase tells us if someone is logged in,
  // and tells us again whenever they log in or out.
  useEffect(() => {
    const stopListening = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setChecking(false)
    })
    return stopListening // clean up when the app closes
  }, [])

  if (checking) {
    return <p className="p-8 text-gray-500">Loading...</p>
  }

  // Not logged in → show the login page
  if (!user) {
    return <Login />
  }

  // Logged in → show the home page
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Sidharth Finance App</h1>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <p className="text-gray-600">Welcome, {user.email}</p>
      <div className="mt-6">
        <LoadStartingData />
      </div>
    </div>
  )
}

export default App