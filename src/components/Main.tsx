import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="container mx-auto px-4 py-8">{children}</main>;
};

export default Main;
