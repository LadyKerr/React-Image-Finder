import React from "react";
import AppBar from "material-ui/AppBar";

const NavBar = () => {
  return (
    <div>
      <AppBar
        title="Image Finder"
        style={{
          backgroundColor: "#ffb900",
          fontFamily: "Kaushan Script"
        }}
      />
    </div>
  );
};

export default NavBar;
