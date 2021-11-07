import React, { FC } from "react";
import { Navbar, Footer } from "../components";

const Layout: FC = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      <main> {children} </main>
      <Footer />
    </div>
  );
};

export default Layout;
