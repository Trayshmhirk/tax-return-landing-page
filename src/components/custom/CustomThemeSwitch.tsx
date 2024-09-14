import { useTheme } from "@/hooks/useTheme";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

const CustomThemeSwitch = () => {
   const { theme, setTheme } = useTheme();

   const isDark = theme === "dark";
   const toggleTheme = () => {
      setTheme(isDark ? "light" : "dark");
   };

   return (
      <div className="flex items-center">
         <div
            className="relative w-12 h-7 rounded-full bg-neutral-300 dark:bg-neutral-600 cursor-pointer"
            onClick={toggleTheme}
         >
            <div
               className={`absolute top-[2.5px] w-[22px] h-[22px] bg-white rounded-full transition-transform ${
                  isDark ? "translate-x-6" : "translate-x-0.5"
               }`}
            />

            <MdOutlineLightMode
               className={`absolute left-[4.4px] top-[5.5px] text-yellow-400 transition-opacity ${
                  isDark ? "opacity-0" : "opacity-100"
               }`}
            />

            <BsMoonStars
               className={`absolute right-[6px] top-[6.5px] text-sm text-richElectricBlue transition-opacity ${
                  isDark ? "opacity-100" : "opacity-0"
               }`}
            />
         </div>
      </div>
   );
};

export default CustomThemeSwitch;
