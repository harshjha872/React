import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import QuoteStore from "./store/quoteStore";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={QuoteStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
