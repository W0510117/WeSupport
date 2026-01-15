import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import peersLogo from '../assets/peerslogo2.png'
import SearchBar from "../components/SearchBar";



function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <header className="home-hero">
        <img
          src={peersLogo}
          alt="PEERS logo"
          className="peers-logo"
        />

        <p className="home-subtitle">
          A student-built platform to connect, support, and stay informed.
        </p>

        <div className="home-cta">
          <SearchBar />
        </div>
      </header>

      {/* Quick Actions */}
      <section className="home-actions">
        <div className="action-card">
          <h2>Create Account</h2>
          <p>Join PEERS and start connecting with other students.</p>
          <Link to="/create-account" className="btn-secondary">
            Create Account
          </Link>
        </div>

        <div className="action-card">
          <h2>My Account</h2>
          <p>View and manage your profile and personal information.</p>
          <Link to="/account" className="btn-secondary">
            Account Management
          </Link>
        </div>

        <div className="action-card">
          <h2>Settings</h2>
          <p>Customize your preferences and notification options.</p>
          <Link to="/settings" className="btn-secondary">
            Settings
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home