import React from "react";

import { Routes, Route } from "react-router-dom";

import BaseLayout from "./components/organisms/BaseLayout";
import List from "./components/molecules/List";
import RegisterPage from "./components/pages/RegisterPage";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import NoPageFound from "./components/molecules/NoPageFound";

function App(): JSX.Element {
  return (
    <div className="App">
      <BaseLayout>
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
