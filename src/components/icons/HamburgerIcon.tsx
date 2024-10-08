type HamburgerIconProps = {
   toggle?: () => void;
   isOpen?: boolean;
};

export const HamburgerIcon = ({ toggle, isOpen }: HamburgerIconProps) => {
   return (
      <button
         onClick={toggle}
         className={`w-9 h-9 flex flex-col items-center justify-center p-2  ${isOpen ? "space-y-1 sm:-space-y-[2px]" : "space-y-[4px]"}`}
      >
         <span
            className={`block h-0.5 w-full bg-mutedGray dark:bg-white transform transition duration-300 ease-in-out ${
               isOpen ? "rotate-45 translate-y-1.5 sm:rotate-0" : ""
            }`}
         />
         <span
            className={`block h-0.5 w-full bg-mutedGray dark:bg-white transition duration-300 ease-in-out ${
               isOpen ? "opacity-0 sm:opacity-100" : ""
            }`}
         />
         <span
            className={`block h-0.5 w-full bg-mutedGray dark:bg-white transform transition duration-300 ease-in-out ${
               isOpen ? "-rotate-45 -translate-y-1.5 sm:-rotate-0" : ""
            }`}
         />
      </button>
   );
};
