import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
   return (
      <div className="w-full h-full flex flex-col items-center bg-richElectricBlue text-white p-6 sm:px-8 sm:py-10 md:px-12">
         <div className="container flex flex-col gap-8">
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
                     className="bg-transparent dark:bg-transparent font-medium placeholder:text-brightGray"
                  />
                  <Button className="bg-white text-eerieBlack">
                     Subscribe
                  </Button>
               </div>
            </div>

            <div className="flex flex-col md:items-center md:flex-row md:justify-between gap-6">
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
      </div>
   );
};

export default Footer;
