import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MovieDetailPage from "./pages/movieDetails";
import "./App.css";

const App: React.FC = () => {
  return (
    // here we wrap our whole app in a router
    //there might have been other ways of achieving this but this one felt convenient
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </Router>
    //A container for all the defined Route components
    // It determines which component to render based on the current URL
    //and as you can see we have two routes a static one which is our home page and a dynamic one
  );
};

export default App;
