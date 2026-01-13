import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Welcome to WeSupport</h1>
      <p>Your support platform for community assistance</p>
      
      <nav>
        <ul>
          <li><Link to="/create-account">Create Account</Link></li>
          <li><Link to="/account">Account Management</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
