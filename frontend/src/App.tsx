import React from "react";

import { Routes, Route } from "react-router-dom";

import BaseLayout from "./components/organisms/BaseLayout";
import List from "./components/molecules/List";
import RegisterPage from "./components/pages/RegisterPage";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <BaseLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loans-list" element={<List />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div>404</div>} />
          {/* </Route>
          <Route path="/loans-list">
            <List />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/register">
            <LoginPage />
          </Route> */}
        </Routes>
      </BaseLayout>
    </div>
  );
}

export default App;
