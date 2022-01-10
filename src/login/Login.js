import React from "react";
import "./Login.css";

function Login() {
  return (
    <div div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="lgoinScreen_logo"
          src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        />
        <button className="loginScreen_button">SIGNIN</button>
        <div className="loginScreen_gradient" />
      </div>
    </div>
  );
}

export default Login;
