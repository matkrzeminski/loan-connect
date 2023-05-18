import React from "react";
import BaseLayout from "./components/organisms/BaseLayout";
import List from "./components/molecules/List";
import RegisterPage from "./components/pages/RegisterPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <BaseLayout>
        <RegisterPage />

        {/* <List /> */}
      </BaseLayout>
    </div>
  );
}

export default App;
