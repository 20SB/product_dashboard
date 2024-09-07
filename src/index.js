import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <ProductProvider>
                <App />
            </ProductProvider>
        </ChakraProvider>
    </React.StrictMode>
);
