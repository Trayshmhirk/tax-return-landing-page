import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { Button } from "../ui/button";

const Header = () => {
   return (
      <header className="bg-white flex justify-center items-center py-3 px-6 sm:px-8 md:px-12">
         <div className="container flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
               <img
                  width="44"
                  height="44"
                  src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-tax-taxes-flatarticons-blue-flatarticons.png"
                  alt="external-tax-taxes-flatarticons-blue-flatarticons"
               />
               <h1 className="text-xl font-bold">Tax Returns</h1>
            </div>

            <nav className="hidden items-center md:gap-7 lg:gap-10 px-3 md:flex">
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     `${isActive ? "text-richElectricBlue" : "text-current"}`
                  }
               >
                  Home
               </NavLink>
               <NavLink
                  to="/features"
                  className={({ isActive }) =>
                     `${isActive ? "text-richElectricBlue" : "text-current"}`
                  }
               >
                  Features
               </NavLink>
               <NavLink
                  to="/about"
                  className={({ isActive }) =>
                     `${isActive ? "text-richElectricBlue" : "text-current"}`
                  }
               >
                  About
               </NavLink>
               <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                     `${isActive ? "text-richElectricBlue" : "text-current"}`
                  }
               >
                  FAQ
               </NavLink>
            </nav>

            <div className="hidden items-center gap-4 px-3 md:flex">
               <NavLink
                  to="login"
                  className={({ isActive }) =>
                     `${isActive ? "text-richElectricBlue" : "text-current"}`
                  }
               >
                  Login
               </NavLink>
               <Button className="">Sign up</Button>
            </div>

            <div className="block md:hidden">
               <HamburgerIcon />
            </div>
         </div>
      </header>
   );
};

export default Header;
