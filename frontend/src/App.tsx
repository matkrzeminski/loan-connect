import React from "react";
import BaseLayout from "./components/organisms/BaseLayout";
import List from "./components/molecules/List";
import RegisterPage from "./components/pages/RegisterPage";
import LandingPage from "./components/pages/LandingPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <BaseLayout>
        <LandingPage />
        {/* <List /> */}
        {/* <RegisterPage /> */}
      </BaseLayout>
    </div>
  );
}

export default App;
