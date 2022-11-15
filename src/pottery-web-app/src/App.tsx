import React from "react";
import Main from "./components/Gallery/main";
import PotNotes from "./components/Pot/PotNotes";
import Banner from "./components/banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, Page404 } from "./ErrorPages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Banner></Banner>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pot/:id" element={<PotNotes />} />
          <Route path="pot/:id/notfound" element={<NotFound />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
