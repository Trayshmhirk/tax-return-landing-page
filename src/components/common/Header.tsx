import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { Button } from "../ui/button";
import CustomThemeSwitch from "../custom/CustomThemeSwitch";
import { useSidebar } from "@/hooks/useSidebar";

const Header = () => {
   const { isOpen, toggleSidebar } = useSidebar();

   return (
      <header className="bg-white flex justify-center items-center dark:bg-eerieBlack py-3 px-5 sm:px-7 lg:px-10 text-sm lg:text-base">
         <div className="w-full md:container flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
               <img
                  width="44"
                  height="44"
                  src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-tax-taxes-flatarticons-blue-flatarticons.png"
                  alt="external-tax-taxes-flatarticons-blue-flatarticons"
               />
               <h1 className="text-base lg:text-xl font-bold">Tax Returns</h1>
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
                  to="/contact"
                  className={({ isActive }) =>
                     `${isActive ? "text-richElectricBlue" : "text-current"}`
                  }
               >
                  Contact Us
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
               <CustomThemeSwitch />
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

            <div className="flex gap-2 md:hidden">
               <CustomThemeSwitch />

               <HamburgerIcon toggle={toggleSidebar} isOpen={isOpen} />
            </div>
         </div>
      </header>
   );
};

export default Header;
