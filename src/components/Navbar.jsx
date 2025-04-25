
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {

    const [isOpen , setIsOpen ] = useState(false);
    // const [open , setOpen ] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen)
    }

    return (
     <nav className="bg-green-900 text-white py-4 md:py-8">
        <div className="container mx-auto flex justify-between items-center">
            <h3> React Practice</h3>

                {/* Mobile Menu */}
                <div>
                    <button onClick={toggleMenu}>
                        {
                            isOpen ?   <IoIosClose/> : <FaBars/> 
                        }
                    </button>
                </div>

                {/* <div>
                    <button onClick={()=>setOpen(!open)}> { open ? <FaBars/> :<IoIosClose/>}</button>
                </div> */}

            <ul className="flex space-x-4 md:space-x-6">
                <li>Home</li>
                <li>Products</li>
                <li>Blogs</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button> LogIn</button>
        </div>
     </nav>
    );
};

export default Navbar;