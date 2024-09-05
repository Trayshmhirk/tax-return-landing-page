import {
   createBrowserRouter,
   createRoutesFromElements,
   RouterProvider,
   Route,
} from "react-router-dom";
import { Suspense } from "react";

import MainLayout from "../layouts/MainLayout";

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
            // errorElement={<ErrorPage />}
         ></Route>
      </>
   )
);

export const Routes = () => {
   return <RouterProvider router={router} />;
};
