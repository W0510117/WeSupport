import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="layout">
      <nav className="peers-navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand">
            <span className="brand-name">PEERS</span>
            <span className="brand-tagline">Built by students</span>
          </Link>

          <div className="navbar-actions">
            <Link to="/login" className="btn-outline">Log In</Link>
            <Link to="/create-account" className="btn-primary">Sign Up</Link>
          </div>
        </div>
      </nav>

      <main className="layout-content">
        <Outlet />
      </main>

      <footer className="peers-footer">
        © {new Date().getFullYear()} PEERS — Built by students, for students
      </footer>
    </div>
  )
}

export default Layout
