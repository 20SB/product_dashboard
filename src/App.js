import React, { useState, useContext, useEffect } from "react";
import { ProductContext } from "./context/ProductContext";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import { Box, Heading } from "@chakra-ui/react";

function App() {
    const { filteredProducts } = useContext(ProductContext);
    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    // Whenever filteredProducts or the currentPage changes, update the products being shown
    useEffect(() => {
        const updateCurrentProducts = () => {
            const indexOfLastProduct = currentPage * productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
            setCurrentProducts(filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct));
        };

        updateCurrentProducts();
    }, [filteredProducts, currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Box p={4} maxWidth="1200px" mx="auto">
            <Heading as="h1" mb={4}>
                Product Dashboard
            </Heading>
            <SearchBar />
            <Filters />
            <ProductList products={currentProducts} />
            <Pagination onPageChange={handlePageChange} />
        </Box>
    );
}

export default App;
