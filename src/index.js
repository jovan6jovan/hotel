import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./context";
import ScrollToTop from "./components/ScrollToTop";
import App from "./containers/App";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);
