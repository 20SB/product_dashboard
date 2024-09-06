import React from "react";
import ProductProvider from "./context/ProductContext";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import { Box, Heading } from "@chakra-ui/react";

function App() {
    return (
        <ProductProvider>
            <Box p={4} maxWidth="1200px" mx="auto">
                <Heading as="h1" mb={4}>
                    Product Dashboard
                </Heading>
                <SearchBar />
                <Filters />
                <ProductList />
                <Pagination />
            </Box>
        </ProductProvider>
    );
}

export default App;
