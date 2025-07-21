import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { ToastContainer } from "react-toastify";
=======
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
>>>>>>> d3fccb7769defd5c6e3ea0ff361284b7b296a1a8
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<<<<<<< HEAD
    <BrowserRouter>
        <Provider store={store}>
          <App />   
          <Toaster/>  
        </Provider>
    </BrowserRouter>



  
=======
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </BrowserRouter>
>>>>>>> d3fccb7769defd5c6e3ea0ff361284b7b296a1a8
);
