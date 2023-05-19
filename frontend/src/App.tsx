import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/BaseLayout";
import List from "./components/pages/List";
import RegisterPage from "./components/pages/RegisterPage";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import NoPageFound from "./components/NoPageFound";

function App(): JSX.Element {
  const location = useLocation();

  return (
    <div className="App">
      <BaseLayout currentLocation={location.pathname}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loans-list" element={<List />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
