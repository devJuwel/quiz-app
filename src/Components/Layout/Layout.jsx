import React from "react";

import Header from "../Header/Header";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
