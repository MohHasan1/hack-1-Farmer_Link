import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileSelection from "./pages/ProfileSelection";
import { Prediction } from "./pages/Prediction/Prediction";
import { MarketPlace } from "./pages/Marketplace/MarketPlace";
import { ConsumerDemand } from "./pages/ConsumerDemand/ConsumerDemand";
import { FarmerPost } from "./pages/farmer-input-post";

function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);

  return (
    <Router>
      {!isFirstTime && <Sidebar />}
      <Routes>
        {isFirstTime && (
          <Route
            path="/"
            element={<ProfileSelection setIsFirstTime={setIsFirstTime} />}
          />
        )}
        {!isFirstTime && (
          <>
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/consumer-demand" element={<ConsumerDemand />} />
            <Route path="/add-to-marketplace" element={<FarmerPost />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
