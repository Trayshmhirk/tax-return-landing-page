import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const MainLayout = () => {
   return (
      <div className="w-full h-full flex flex-col overflow-hidden">
         <Header />
         <Outlet />
      </div>
   );
};

export default MainLayout;
