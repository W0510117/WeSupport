function Layout() {

    return (
    <div className="d-flex flex-column min-vh-100">

        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand fs-4 fw-bold">
            NSCC
          </Link>
          <div>
            <Link to="/login" className="btn btn-outline-primary me-2">
              Log In
            </Link>
            <Link to="/create-account" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
          </div>
        </nav>

        <footer className="bg-light text-dark text-center py-3 mt-auto">
        © {new Date().getFullYear()} FunTickets — All rights reserved.
      </footer>

    </div>
    );
}