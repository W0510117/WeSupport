import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

function Home() {
  const { currentUser, logout } = useAuth()

  const handleLogout = async () => {
    try {
      await logout()
    } catch (err) {
      console.error('Failed to log out:', err)
    }
  }

  return (
    <div className="home">
      <h1>Welcome to WeSupport</h1>
      <p>Your support platform for community assistance</p>
      
      {currentUser && (
        <div className="user-info">
          <p>Logged in as: {currentUser.email}</p>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
      
      <nav>
        <ul>
          {!currentUser ? (
            <>
              <li><Link to="/login">Log In</Link></li>
              <li><Link to="/create-account">Create Account</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/account">Account Management</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Home
