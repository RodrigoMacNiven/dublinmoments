import './navbar.css';

function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark">
      <div className="container-fluid d-flex justify-content-center">
        <a className="navbar-brand" href="/">
          <img src="/Images/logo.svg" alt="Logo" height="60" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
