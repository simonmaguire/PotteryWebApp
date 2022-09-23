import React from "react";
import Main from "./components/Gallery/main";
import PotForm from "./components/Pot/PotForm";
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
          <Route path="/pot/:id" element={<PotForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
