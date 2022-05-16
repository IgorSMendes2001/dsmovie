import { ReactComponent as GitHubIcon } from "assets/img/github.svg";
import './styles.css'
function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <a href="/" className="dsmovie-nav-a">DSMovie</a>
          <a href="https://github.com/IgorSMendes2001">
            <div className="dsmovie-contact-container">
              <GitHubIcon />
              <p className="dsmovie-contact-link">/IgorSMendes2001</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
