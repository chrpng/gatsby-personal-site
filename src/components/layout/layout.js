import React from "react";
import "./layout.scss";
import Nav from "../nav/nav";

import 'react-awesome-slider/dist/styles.css';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
