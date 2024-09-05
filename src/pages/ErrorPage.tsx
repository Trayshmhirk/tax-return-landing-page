// import { Button } from "@/components/ui/button";
import { useRouteError, useNavigate } from "react-router-dom";

type Error = {
   data?: string;
   status?: string;
   statusText?: string;
   message?: string; // For JavaScript errors
};

type ErrorPageProps = {
   error?: Error; // Accepting error from ErrorBoundary
   resetErrorBoundary?: () => void; // Used for ErrorBoundary reset
};

export const ErrorPage = ({
   error: boundaryError,
   resetErrorBoundary,
}: ErrorPageProps) => {
   // Hook to capture route-specific errors
   const routeError = useRouteError();
   const navigate = useNavigate();

   // Use boundaryError or routeError; fallback to custom 404 error
   const error = boundaryError ||
      routeError || { status: 404, statusText: "Looks like you got lost" };

   // Type guard to check if the error is of type 'Error'
   const isError = (error: unknown): error is Error => {
      return (
         typeof error === "object" &&
         error !== null &&
         ("data" in error ||
            "message" in error ||
            "status" in error ||
            "statusText" in error)
      );
   };

   return (
      <div
         id="error-page"
         className={`relative w-full h-full flex flex-col gap-6 justify-center items-center dark:bg-eerieBlack px-6 py-20 overflow-hidden`}
      >
         <div className="centered-circle w-[299px] h-[299px] md:w-[499px] md:h-[499px] bg-richElectricBlue bg-opacity-[0.03] rounded-full -z-0"></div>
         <div className="centered-circle w-[399px] h-[399px] md:w-[699px] md:h-[699px] bg-richElectricBlue bg-opacity-[0.03] rounded-full -z-0"></div>
         <div className="centered-circle w-[499px] h-[499px] md:w-[899px] md:h-[899px] bg-richElectricBlue bg-opacity-[0.03] rounded-full -z-0"></div>
         {isError(error) && (
            <div className="flex flex-col items-center gap-4 text-center z-50">
               <h1 className="text-7xl md:text-9xl font-extrabold text-richElectricBlue">
                  {error.status || "Error"}!
               </h1>
               <p className="text-lg md:text-2xl text-mutedGray dark:text-chineseWhite font-bold tracking-wider">
                  {error.statusText || "Looks like something went wrong.."}
               </p>
               {error.message ? (
                  <p className="text-sm md:text-lg font-medium">
                     {error.message}
                  </p>
               ) : (
                  <p className="text-xs md:text-sm">
                     The page you're looking for doesn't exist or has been
                     moved.
                  </p>
               )}
               {error.data && (
                  <p className="text-xs md:text-sm">{error.data}</p>
               )}
               <button
                  onClick={() =>
                     error.message ? window.location.reload() : navigate(-1)
                  }
                  className="px-4 py-3 bg-richElectricBlue text-white font-medium rounded shadow-md dark:shadow-md-dark hover-shadow-body disabled:bg-spanishGray dark:disabled:bg-mutedGray mt-4 md:w-40 md:mt-6 w-40"
               >
                  {error.message ? "Reload page" : "Go back"}
               </button>
            </div>
         )}
         {resetErrorBoundary && (
            <button
               onClick={resetErrorBoundary}
               type="button"
               className="px-4 py-3 bg-richElectricBlue font-medium rounded shadow-md dark:shadow-md-dark hover-shadow-body disabled:bg-spanishGray dark:disabled:bg-mutedGray text-white z-50"
            >
               Try Again
            </button>
         )}
      </div>
   );
};
