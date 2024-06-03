import MenuBar from "../Menu/MenuBar";
import React from "react";

function Layout() {
  const value = {
    locale: "en",
  };

  return (
    <div>
      <MenuBar></MenuBar>
      <slot></slot>
    </div>
  );
}

export default Layout;
