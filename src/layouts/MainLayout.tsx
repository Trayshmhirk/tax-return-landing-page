import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const MainLayout = () => {
   return (
      <div className="w-full h-full flex flex-col">
         <Header />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;
