import React from "react";
import BaseLayout from "./components/organisms/BaseLayout";
import List from "./components/molecules/List";

function App(): JSX.Element {
  return (
    <div className="App">
      <BaseLayout>
        <List />
      </BaseLayout>
    </div>
  );
}

export default App;
