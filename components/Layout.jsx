import React from "react";
import Meta from "./Meta";

function Layout({ children }) {
  return (
    <>
      <Meta />
      {children}
    </>
  );
}

export default Layout;
