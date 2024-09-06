import { ThemeProvider } from "@/context/ThemeContext";

type ContextProviderProps = {
   children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
   return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
         {children}
      </ThemeProvider>
   );
};

export default ContextProvider;
