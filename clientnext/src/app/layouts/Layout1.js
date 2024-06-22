// components/Layout.js
import React from 'react';
import Link from 'next/link';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout1 = ({ children }) => {
  return (
    <div>
      <NavBar/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout1;
