import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/Layout";
import "./styles/index.css";
import { ContextProvider } from "./Hooks/useContext/context";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <App />
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
