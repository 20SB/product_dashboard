import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Input, Box } from "@chakra-ui/react";

const SearchBar = () => {
    const { products, setFilteredProducts } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <Box mb={4}>
            <Input placeholder="Search products..." value={searchTerm} onChange={handleSearch} />
        </Box>
    );
};

export default SearchBar;
