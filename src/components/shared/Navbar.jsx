import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { Link, useLocation } from "react-router";

const Navbar = () => {
    // Toggle Button 
  const [isOpen, setIsOpen] = useState(false);
  // const [open , setOpen ] = useState(false);

//   Active link
  const [activeLink , setActiveLink] = useState(false);
  const location = useLocation()

  useEffect(()=>{
    setActiveLink(location.pathname || '/')
  },[location.pathname])

  const handleActiveLink = (path) =>{
    console.log('clicked');
    setActiveLink(path)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-900 text-white py-4 md:py-8 sticky top-0 border-b-green-500">
      <div className="container mx-auto flex justify-between items-center">
        <h3 className="text-xl font-bold cursor-pointer"> React Practice</h3>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoIosClose /> : <FaBars />}
          </button>
        </div>

        {/* <div>
                    <button onClick={()=>setOpen(!open)}> { open ? <FaBars/> :<IoIosClose/>}</button>
                </div> */}

        <ul className="hidden md:flex space-x-4 md:space-x-6">
          <li>
            <Link 
                onClick={()=>handleActiveLink('/')}
                className={`${activeLink === '/' ? 'text-green-200': 'hover:text-green-200'}`} 
                to={"/"}
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
                onClick={()=>handleActiveLink('/products')}
                className={`${activeLink === '/products' ? 'text-green-200': 'hover:text-green-200'}`} 
                to={"products"}
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
                onClick={()=>handleActiveLink('/blogs')}
                className={`${activeLink === '/blogs' ? 'text-green-200': 'hover:text-green-200'}`} 
                to={"blogs"}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
                onClick={()=>handleActiveLink('/about')}
                className={`${activeLink === '/about' ? 'text-green-200': 'hover:text-green-200'}`} 
                to={"about"}
             >
              About
            </Link>
          </li>
          <li>
            <Link
                onClick={()=>handleActiveLink('/contact')}
                className={`${activeLink === '/contact' ? 'text-green-200': 'hover:text-green-200'}`} 
                to={"contact"}
            >
              Contact
            </Link>
          </li>
        </ul>

        <Link to={'/login'}>
          <button
            className="hidden md:block
            bg-white text-black cursor-pointer
            hover:bg-slate-400 px-4 py-1 rounded"
          >
            LogIn
          </button>
        </Link>

      

        {/* Mobile Menu Clops */}

        <div
          className={`md:hidden w-full absolute top-full left-0 bg-amber-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className=" flex flex-col items-center py-4  ">
            <li>Home</li>
            <li>Products</li>
            <li>Blogs</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              {" "}
              <button className=""> LogIn</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
