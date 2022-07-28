import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products-context";

import configureStore from "./hooks-store/products-store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ProductsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductsProvider>
);

/**
 * USE CUSTOM STATE STORE
 */
// configureStore();
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );
