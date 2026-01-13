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
<<<<<<< HEAD

      {/* Hero Section */}
      <header className="home-hero">
        <h1 className="home-title">PEERS</h1>
        <p className="home-subtitle">
          A student-built platform to connect, support, and stay informed.
        </p>

        <div className="home-cta">
          <Link to="/create-account" className="btn-primary">
            Get Started
          </Link>
        </div>
      </header>

      {/*Actions*/}
      <section className="home-actions">
        <div className="action-card">
          <h2>Create Account</h2>
          <p>Join PEERS and start connecting with other students.</p>
          <Link to="/create-account" className="btn-secondary">
            Create Account
          </Link>
        </div>

        <div className="action-card">
          <h2>Manage Account</h2>
          <p>View and manage your profile and personal information</p>
          <Link to="/account" className="btn-secondary">
            Account Management  
          </Link>
        </div>

        <div className="action-card">
          <h2>Settings</h2>
          <p>Customize your Preferences and notification options.</p>
          <Link to="/settings" className="btn-secondary">
            Go to Settings
          </Link>
        </div>
      </section>
      </div>
=======
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
>>>>>>> 2db45cdbb644c9098589c4fdb98368146d63826e
  )
}

export default Home