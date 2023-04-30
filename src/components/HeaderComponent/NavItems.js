import { Link } from "react-router-dom";

const NavItems = () => {
    return (
      <>
        <ul className="nav-items">

          <li>
            <Link to='/' >
            Home
            </Link>
            
            </li>
            <li>
            <Link to='/about' >
            About
            </Link>
            
            </li>
          <li>Profile</li>
        </ul>
      </>
    );
  };

  export default NavItems;



   