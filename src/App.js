import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import video from "./food.mp4";
import { SearchRecipe } from "./SearchRecipeComponent/SearchRecipe";
import { NutritionAnalysis } from "./NutritionAnalysisComponent/NutritionAnalysis";
import { About } from "./About/About";
import { LoaderPage } from "./Loader/LoaderPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoaderPage />
      ) : (
        <Router>
          <nav className="nav">
            <Link to="/">About</Link>
            <Link to="/searchrecipe">Find a Recipe</Link>
            <Link to="/nutritionanalysis">Calculate nutrition</Link>
          </nav>

          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/searchrecipe" element={<SearchRecipe />} />
            <Route
              path="/nutritionanalysis"
              element={
                <NutritionAnalysis/>
              }
            />
          </Routes>
        </Router>
      )}

      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
