import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">

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
  )
}

export default Home