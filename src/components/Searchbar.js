import React, { useState } from "react";
import { Navbar, NavbarContent, Input } from "@nextui-org/react";
import "../App.css";

export default function Searchbar() {
  const [isComponentVisible, setComponentVisibility] = useState(false);

  const toggleComponentVisibility = () => {
    setComponentVisibility(!isComponentVisible);
  };

  return (
    <div className="searchbar-container">
      <img
        className="IconSearch"
        src={require("../img/icon2.png")}
        onClick={toggleComponentVisibility}
      />

      {isComponentVisible && (
        <div className="custom-searchbar">
          <Input
           
            placeholder="Type to search..."
            size="sm"
            type="search"
          />
          
        </div>
      )}
    </div>
  );
}
