import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
} from "react-router-dom";
import { Suspense } from "react";

import MainLayout from "../layouts/MainLayout";
import { ErrorPage } from "../pages/ErrorPage";

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
            <Route path="*" element={<ErrorPage />} />
         </Route>
      </>
   )
);

export const Routes = () => {
   return <RouterProvider router={router} />;
};
