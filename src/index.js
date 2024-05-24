import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App.jsx";
import { Provider } from "react-redux";
import myStore from "./Store/Store.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={myStore}>
      <App />
    </Provider>
  </>
);
