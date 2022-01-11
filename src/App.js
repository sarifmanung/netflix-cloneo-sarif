import React from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./login/LoginScreen";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/login" element={<LoginScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
