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
import PageLoader from "@/components/loaders/PageLoader";

const Home = lazy(() => import("../pages/home/Home"));
const Contact = lazy(() => import("../pages/company/Contact"));
const Terms = lazy(() => import("../pages/company/Terms"));
const Faq = lazy(() => import("../pages/resources/Faq"));
const Privacy = lazy(() => import("../pages/resources/Privacy"));

const router = createBrowserRouter(
   createRoutesFromElements(
      <>
         <Route
            path="/"
            element={
               <Suspense fallback={<PageLoader />}>
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
            <Route
               path="terms"
               element={
                  <ProtectedRoute>
                     <Terms />
                  </ProtectedRoute>
               }
            />
            <Route
               path="faq"
               element={
                  <ProtectedRoute>
                     <Faq />
                  </ProtectedRoute>
               }
            />
            <Route
               path="privacy"
               element={
                  <ProtectedRoute>
                     <Privacy />
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
