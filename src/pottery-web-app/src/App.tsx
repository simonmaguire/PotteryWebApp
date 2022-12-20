import React from "react";
import Main from "./components/Gallery/main";
import PotNotes from "./components/Pot/PotNotes";
import Banner from "./components/banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, Page404 } from "./ErrorPages";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import { Home } from "./home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Banner></Banner>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Main />} />
          <Route path="/pot/:id" element={<PotNotes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route  path='/user/:userId' element={<UserProfile/>} /> */}
          <Route path="pot/:id/notfound" element={<NotFound />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
