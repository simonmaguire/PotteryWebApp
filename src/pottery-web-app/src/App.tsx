import React from "react";
import logo from "./logo.svg";
import Main from "./components/Gallery/main";
import AddPot from "./components/Pot/AddPot";
import Banner from "./components/banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new" element={<AddPot />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
