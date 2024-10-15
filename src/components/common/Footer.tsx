import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="w-full h-full flex flex-col items-center bg-richElectricBlue text-white py-8 px-5 pb-10 sm:px-8 sm:py-14 lg:px-12">
         <div className="w-full md:container flex flex-col gap-8">
            <div className="flex flex-col md:items-center md:flex-row md:justify-between gap-6">
               <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">Join our newsletter</h1>
                  <span className="text-sm font-medium">
                     We'll send you a nice letter once per week. No spam.
                  </span>
               </div>

               <div className="flex items-center gap-3">
                  <Input
                     placeholder="Enter your email"
                     className="bg-transparent dark:bg-transparent font-medium border-white dark:border-white placeholder:text-brightGray dark:placeholder:text-brightGray"
                  />
                  <Button className="bg-white text-eerieBlack">
                     Subscribe
                  </Button>
               </div>
            </div>

            <div className="flex flex-col gap-7">
               <div className="grid md:grid-cols-[0.8fr_0.3fr_0.4fr_0.5fr] lg:grid-cols-[1.5fr_0.5fr_0.5fr_0.6fr] gap-7 lg:gap-8 mb-8">
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-start gap-3 sm:gap-5">
                     <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                        <img
                           width="55"
                           height="55"
                           src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-tax-taxes-flatarticons-blue-flatarticons.png"
                           alt="external-tax-taxes-flatarticons-blue-flatarticons"
                        />
                        <h1 className="text-xl font-bold">Tax Returns</h1>
                     </div>

                     <p className="max-w-sm text-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quas distinctio molestias inventore, temporibus,
                        assumenda earum aliquam harum minus ut, odit est saepe
                        nobis?
                     </p>
                  </div>

                  <nav className="flex flex-col gap-3 md:gap-4 items-center md:items-start text-sm">
                     <p className="text-base font-bold">Resources</p>
                     <div className="flex flex-col gap-2  items-center md:items-start">
                        <NavLink
                           to="/features"
                           className="footer-link hover:text-white"
                        >
                           Features
                        </NavLink>
                        <NavLink
                           to="/faq"
                           className="footer-link hover:text-white"
                        >
                           FAQ
                        </NavLink>
                        <NavLink
                           to="/help"
                           className="footer-link hover:text-white"
                        >
                           Help
                        </NavLink>
                        <NavLink
                           to="/privacy"
                           className="footer-link hover:text-white"
                        >
                           Privacy
                        </NavLink>
                     </div>
                  </nav>
                  <nav className="flex flex-col gap-3 md:gap-4 items-center md:items-start text-sm">
                     <p className="text-base font-bold">Company</p>
                     <div className="flex flex-col gap-2  items-center md:items-start">
                        <NavLink
                           to="/contact"
                           className="footer-link hover:text-white"
                        >
                           Contact Us
                        </NavLink>
                        <NavLink
                           to="/about"
                           className="footer-link hover:text-white"
                        >
                           About Us
                        </NavLink>
                        <NavLink
                           to="/blog"
                           className="footer-link hover:text-white"
                        >
                           Blog
                        </NavLink>
                        <NavLink
                           to="/terms"
                           className="footer-link hover:text-white"
                        >
                           Terms & conditions
                        </NavLink>
                     </div>
                  </nav>
                  <nav className="flex flex-col gap-3 md:gap-4 items-center md:items-start text-sm">
                     <p className="text-base font-bold">Information</p>
                     <div className="flex flex-col gap-2 items-center md:items-start">
                        <p className="font-medium">
                           Phone: (+234) 805 571 2758
                        </p>
                        <p className="font-medium">Email: @taxreturns.com</p>
                     </div>
                  </nav>
               </div>

               <div className="h-px w-full bg-ghostWhite" />

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
         </div>
      </footer>
   );
};

export default Footer;
