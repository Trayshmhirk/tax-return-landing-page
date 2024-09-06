import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="w-full h-full flex flex-col items-center bg-richElectricBlue text-white py-6 px-5 pb-10 sm:px-8 sm:py-14 lg:px-12">
         <div className="container flex flex-col gap-9">
            <div className="flex flex-col md:items-center md:flex-row md:justify-between gap-6">
               <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold">Join our newsletter</h1>
                  <span className="text-sm font-medium">
                     We'll send you a nice letter once per week. No spam.
                  </span>
               </div>

               <div className="flex items-center gap-2">
                  <Input
                     placeholder="Enter your email"
                     className="bg-transparent dark:bg-transparent font-medium border-white dark:border-white placeholder:text-brightGray dark:placeholder:text-brightGray"
                  />
                  <Button className="bg-white text-eerieBlack">
                     Subscribe
                  </Button>
               </div>
            </div>

            <div className="flex flex-col items-center gap-4">
               <div className="flex flex-col items-center">
                  <img
                     width="55"
                     height="55"
                     src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-tax-taxes-flatarticons-blue-flatarticons.png"
                     alt="external-tax-taxes-flatarticons-blue-flatarticons"
                  />
                  <h1 className="text-xl font-bold">Tax Returns</h1>
               </div>

               <nav className="flex flex-col items-center gap-4 md:flex-row md:gap-7 lg:gap-8">
                  <NavLink
                     to="/features"
                     className="footer-link hover:text-white"
                  >
                     Features
                  </NavLink>
                  <NavLink to="/about" className="footer-link hover:text-white">
                     About
                  </NavLink>
                  <NavLink to="/about" className="footer-link hover:text-white">
                     Contact
                  </NavLink>
                  <NavLink to="/faq" className="footer-link hover:text-white">
                     FAQ
                  </NavLink>
                  <NavLink to="/help" className="footer-link hover:text-white">
                     Help
                  </NavLink>
                  <NavLink
                     to="/privacy"
                     className="footer-link hover:text-white"
                  >
                     Privacy
                  </NavLink>
               </nav>
            </div>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-6">
               <span className="text-xs font-medium">
                  © 2024 Tax Returns. All rights reserved.
               </span>

               <div className="flex items-center gap-4">
                  <NavLink to="/">
                     <FaXTwitter className="w-5 h-5 text-white font-medium hover-shadow-body" />
                  </NavLink>
                  <NavLink to="/">
                     <FaLinkedin className="w-5 h-5 text-white font-medium hover-shadow-body" />
                  </NavLink>
                  <NavLink to="/">
                     <FaGithub className="w-5 h-5 text-white font-medium hover-shadow-body" />
                  </NavLink>
                  <NavLink to="/">
                     <FaTelegramPlane className="w-5 h-5 text-white font-medium hover-shadow-body" />
                  </NavLink>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
