import { Outlet } from "react-router-dom";

const MainLayout = () => {
   return (
      <div className="w-full flex flex-col overflow-hidden">
         <Outlet />
      </div>
   );
};

export default MainLayout;
