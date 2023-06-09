import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (!container) throw new Error("Could not find root element with id 'root'");

const root = createRoot(container);

console.log(store.getState().user);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
