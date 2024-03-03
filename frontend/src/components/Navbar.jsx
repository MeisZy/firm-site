import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="overhead">
        <ul>
          <a href="" onClick={(e) => e.preventDefault()}>J</a>
          <a href="" onClick={(e) => e.preventDefault()}>+</a>
        </ul>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
