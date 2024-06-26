import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ marginBottom: "1px" }}>
      {" "}
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand text-white">
            BookStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link className="nav-item nav-link active text-white" to="/">
                HOME
              </Link>
              <Link className="nav-item nav-link active text-white" to="/books">
                Books
              </Link>
              <Link
                className="nav-item nav-link active text-white"
                to="/Addbooks"
              >
                Add Books
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
