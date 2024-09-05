"use client";
import { ErrorBoundary } from "react-error-boundary";
import { Routes } from "./routes/Routes";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
   return (
      <div className="min-h-screen min-w-screen">
         <ErrorBoundary FallbackComponent={ErrorPage}>
            <Routes />
         </ErrorBoundary>
      </div>
   );
}

export default App;
