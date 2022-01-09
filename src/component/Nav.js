import React from "react";
import styled from "styled-components";
import './nav.css'

function Nav() {
  return (
    <div className="nav nav_black">
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        />
        <img
          className="nav_avatar"
          src="https://coollogo.net/wp-content/uploads/2021/03/Square-logo.svg"
        />
      </div>
    </div>
  );
}

export default Nav;
