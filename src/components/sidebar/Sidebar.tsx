import { useSidebar } from "@/hooks/useSidebar";
import Overlay from "../common/Overlay";
import { HamburgerIcon } from "../icons/HamburgerIcon";

const Sidebar = () => {
   const { isOpen, toggleSidebar } = useSidebar();

   console.log(isOpen);

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
               <div className="flex flex-col gap-4">
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

                  <div className="w-full h-[1px] bg-eerieBlack dark:bg-white opacity-40" />

                  <div className="flex flex-col gap-3">
                     <nav className="flex flex-col gap-2">
                        {/* {navItemsData.map((navItem) => (
                           <NavItems
                              key={navItem.id}
                              title={navItem.title}
                              navIcon={navItem.navIcon}
                              linkTo={navItem.route}
                              onClick={() => handleToggleSidebar()}
                              isActive={
                                 location.pathname === `/${navItem.route}`
                              }
                              id={navItem.id}
                              isCollapsed={isOpen}
                              navBarAccess={isNotApproved}
                              isChat={isChat}
                           />
                        ))} */}
                     </nav>

                     {/* <NavItems
                        title="Logout"
                        navIcon={BiLogOut}
                        id="logout" // Ensure to provide an id for the logout item
                        onClick={() => console.log("Logout clicked")} // handleLogout function
                        isCollapsed={isOpen}
                     /> */}
                  </div>
               </div>

               <div className="flex flex-col gap-2">
                  {/* <div
                     onClick={toggleTheme}
                     className={`flex items-center ${isOpen ? "" : "justify-center"} p-[10px] gap-4 rounded-lg cursor-pointer hover-bg-shadow`}
                  >
                     <>
                        {isDark ? (
                           <MdOutlineLightMode className="w-5 h-5 text-white" />
                        ) : (
                           <BsMoonStars className="w-5 h-5 text-eerieBlack" />
                        )}
                     </>

                     {isOpen && (
                        <>
                           <p className="text-sm font-medium text-eerieBlack dark:text-white">
                              {isDark ? "Light Mode" : "Dark Mode"}
                           </p>
                        </>
                     )}
                  </div> */}

                  {/* <NavLink
                     to={"/settings/profile"}
                     onClick={() => handleToggleSidebar()}
                     className={`
                        flex items-center p-[10px] gap-4 rounded-lg no-underline
                        ${isOpen ? "" : "justify-center"}
                        ${isNotApproved ? "cursor-not-allowed" : "cursor-pointer"}
                        ${isSettingsActive ? "bg-richElectricBlue text-white shadow-custom dark:shadow-md-dark" : " hover-bg-shadow"}
                     `}
                  >
                     <IoSettingsOutline
                        className={`w-5 h-5 ${isSettingsActive ? "text-white" : "text-eerieBlack dark:text-white"} `}
                     />

                     {isOpen && (
                        <p
                           className={`text-sm font-medium ${isSettingsActive ? "text-white" : "text-eerieBlack dark:text-white"}`}
                        >
                           Settings
                        </p>
                     )}
                  </NavLink> */}
               </div>
            </div>
         </aside>
      </>
   );
};

export default Sidebar;
