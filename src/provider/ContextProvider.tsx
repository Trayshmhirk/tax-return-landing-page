import { ThemeContext } from "@/context/ThemeContext";

type ContextProviderProps = {
   children: React.ReactNode;
};

const ContextProvider = ({ children }: ContextProviderProps) => {
   return (
      <ThemeContext defaultTheme="dark" storageKey="vite-ui-theme">
         {children}
      </ThemeContext>
   );
};

export default ContextProvider;
