import { Link } from "react-router-dom";


const NavItems = () => {
    return (
      <>
        <ul className='flex justify-items-center pt-7'>

          <li className="m-5">
            <Link to='/' >
            Home
            </Link>
            
            </li>
            <li className="m-5">
            <Link to='/about' >
            About
            </Link>
            
            </li>

          <li className="m-5">
            <Link to='/contact'>
            Contact Us
            </Link>
           
            </li>
            <li className="m-5">
            <Link to='/instamart'>
            Instamart
            </Link>
            </li>
        </ul>
      </>
    );
  };

  export default NavItems;



   