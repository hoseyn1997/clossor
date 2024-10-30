import { ReactNode } from "react";

interface AppContentProps {
  children: ReactNode; // Define a type for children
}

const AppContent = function AppContent({ children }: AppContentProps) {
  // const { message } = useBody(); // Access the context value

  return (
    <div className="mx-auto w-full p-2 text-black dark:text-white lg:w-3/4 example">
      {children}
      {/* <p>{message}</p> Display the message from the context */}
    </div>
  );
};

export default AppContent;
