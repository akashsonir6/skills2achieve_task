import React from "react";

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="mb-4">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a href="https://skills2achieve.com" className="navbar-brand">
            skills2achieve
          </a>
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder=" Filter by Name"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
