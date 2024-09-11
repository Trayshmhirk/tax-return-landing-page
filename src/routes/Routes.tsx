import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../layouts/MainLayout";
import { ErrorPage } from "../pages/ErrorPage";
import ProtectedRoute from "./ProtectedRoutes";

const Home = lazy(() => import("../pages/home/Home"));
const Contact = lazy(() => import("../pages/contact/Contact"));

const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route
            path="/"
            element={
               <Suspense fallback={<div>Loading ...</div>}>
                  <MainLayout />
               </Suspense>
            }
            errorElement={<ErrorPage />}
         >
            <Route
               index
               element={
                  <ProtectedRoute>
                     <Home />
                  </ProtectedRoute>
               }
            />
            <Route
               path="contact"
               element={
                  <ProtectedRoute>
                     <Contact />
                  </ProtectedRoute>
               }
            />
            <Route path="*" element={<ErrorPage />} />
         </Route>
      </>
   )
);

export const Routes = () => {
   return <RouterProvider router={router} />;
};
