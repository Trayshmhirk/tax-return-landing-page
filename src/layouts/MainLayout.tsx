import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

const MainLayout = () => {
   return (
      <div className="w-full h-full flex flex-col">
         <Sidebar />

         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;
