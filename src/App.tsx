import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"; // Make sure this import path is correct
import MovieDetailPage from "./pages/movieDetails"; // Adjust the import path if needed
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
