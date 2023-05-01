import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <nav className="nav">
      <ul className="nav-container">
        <li>
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#about"> About Me</a>
        </li>
      </ul>
    </nav>
  );
}
export default NavbarComponent;
