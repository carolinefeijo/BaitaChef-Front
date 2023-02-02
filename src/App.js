import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as S from "./styles.css";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Salty from "./pages/Salty";
import Candy from "./pages/Candy";
import Healthy from "./pages/Healthy";
import Fast from "./pages/Fast";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <S.Container>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/salty" element={<Salty />} />
          <Route path="/candy" element={<Candy />} />
          <Route path="/healthy" element={<Healthy />} />
          <Route path="/fast" element={<Fast />} />
        </Routes>
      </Router>
    </S.Container>
  );
}
export default App;
