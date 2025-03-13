import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Search from "./Search";
import History from "./History";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/search">Search</Link>
        <Link to="/history">History</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
};
export default App;