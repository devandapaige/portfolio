function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">
              <button>About</button>
            </a>
          </li>
          <li>
            <a href="#projects">
              <button>Projects</button>
            </a>
          </li>
          <li>
            <a href="#skills">
              <button>Skills</button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button>Contact</button>
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="siteTitlePhoto"
        aria-label="desk view of Amanda Nelson working at her desk with back to camera"
      >
        <div className="siteTitle">
          <h1>Amanda Nelson</h1>
          <h2>Creative Developer</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
