import { createContext, ReactNode, useContext } from "react";

// Define a type for the context value
interface MyContextType {
  message: string;
}

const BodyContext = createContext<MyContextType | undefined>(undefined);

// Define the props type for the provider
type MyProviderProps = {
  children: ReactNode;
};
export const MyProvider = function MyProvider({ children }: MyProviderProps) {
  // The value we want to provide to our context
  const contextValue = {
    message: "Hello from Context!",
  };

  return (
    <BodyContext.Provider value={contextValue}>{children}</BodyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useBody = () => {
  const context = useContext(BodyContext);
  if (!context) {
    throw new Error("useBody must be used within a MyProvider");
  }
  return context;
};
