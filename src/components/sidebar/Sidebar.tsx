import { useSidebar } from "@/hooks/useSidebar";
import Overlay from "../common/Overlay";
import { HamburgerIcon } from "../icons/HamburgerIcon";
import { useTheme } from "@/hooks/useTheme";
import CustomThemeSwitch from "../custom/CustomThemeSwitch";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Sidebar = () => {
   const { isOpen, toggleSidebar } = useSidebar();
   const { theme, setTheme } = useTheme();

   const isDark = theme === "dark";
   const toggleTheme = () => {
      setTheme(isDark ? "light" : "dark");
   };

   return (
      <>
         <Overlay isOpen={isOpen} />
         <aside
            className={`
               fixed inset-y-0 z-[99] transform transition-transform duration-300 ease-in-out
               ${isOpen ? "translate-x-0" : "-translate-x-full"}
               w-[265px] xs:w-[300px] flex flex-col bg-white dark:bg-darkGray
             text-eerieBlack dark:text-white p-6 shadow-md dark:shadow-md-dark md:hidden
            ]`}
         >
            <div className="h-full flex flex-col justify-between">
               <div className="flex flex-col gap-10">
                  <div className="flex items-center justify-between">
                     <div className="w-fit text-darkElectricBlue">
                        <img
                           width="44"
                           height="44"
                           src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-tax-taxes-flatarticons-blue-flatarticons.png"
                           alt="external-tax-taxes-flatarticons-blue-flatarticons"
                        />
                     </div>
                     <HamburgerIcon toggle={toggleSidebar} isOpen={isOpen} />
                  </div>

                  <div className="flex flex-col gap-10">
                     <nav className="flex flex-col items-center text-center gap-6">
                        <NavLink
                           to="/"
                           className={({ isActive }) =>
                              `${isActive ? "text-richElectricBlue" : "text-current"}`
                           }
                           onClick={() => toggleSidebar()}
                        >
                           Home
                        </NavLink>
                        <NavLink
                           to="/features"
                           className={({ isActive }) =>
                              `${isActive ? "text-richElectricBlue" : "text-current"}`
                           }
                           onClick={() => toggleSidebar()}
                        >
                           Features
                        </NavLink>
                        <NavLink
                           to="/contact"
                           className={({ isActive }) =>
                              `${isActive ? "text-richElectricBlue" : "text-current"}`
                           }
                           onClick={() => toggleSidebar()}
                        >
                           Contact Us
                        </NavLink>
                        <NavLink
                           to="/faq"
                           className={({ isActive }) =>
                              `${isActive ? "text-richElectricBlue" : "text-current"}`
                           }
                           onClick={() => toggleSidebar()}
                        >
                           FAQ
                        </NavLink>
                        <NavLink
                           to="/about"
                           className={({ isActive }) =>
                              `${isActive ? "text-richElectricBlue" : "text-current"}`
                           }
                           onClick={() => toggleSidebar()}
                        >
                           About Us
                        </NavLink>
                        <NavLink
                           to="/about"
                           className={({ isActive }) =>
                              `${isActive ? "text-richElectricBlue" : "text-current"}`
                           }
                           onClick={() => toggleSidebar()}
                        >
                           Blog
                        </NavLink>
                     </nav>

                     <div className="w-full h-[1px] bg-eerieBlack dark:bg-white opacity-20" />

                     <div className="flex flex-col items-center gap-6">
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

                        {/* <NavItems
                        title="Logout"
                        navIcon={BiLogOut}
                        id="logout" // Ensure to provide an id for the logout item
                        onClick={() => console.log("Logout clicked")} // handleLogout function
                        isCollapsed={isOpen}
                     /> */}
                     </div>
                  </div>
               </div>

               <div className="flex flex-col items-center">
                  <div
                     onClick={toggleTheme}
                     className={`flex items-center ${isOpen ? "" : "justify-center"} p-[10px] gap-4 rounded-lg cursor-pointer hover-bg-shadow`}
                  >
                     <CustomThemeSwitch isSidebar />

                     {isOpen && (
                        <>
                           <p className="text-sm font-medium text-eerieBlack dark:text-white">
                              {isDark ? "Dark Mode" : "Light Mode"}
                           </p>
                        </>
                     )}
                  </div>
               </div>
            </div>
         </aside>
      </>
   );
};

export default Sidebar;
