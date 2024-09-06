import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";

const Filters = () => {
    const { products, setFilteredProducts } = useContext(ProductContext);

    const handleFilter = (priceRange, popularityRange) => {
        setFilteredProducts(
            products.filter(
                (product) =>
                    product.price >= priceRange[0] &&
                    product.price <= priceRange[1] &&
                    product.popularity >= popularityRange[0] &&
                    product.popularity <= popularityRange[1]
            )
        );
    };

    return (
        <Box mb={4}>
            <Heading size="md" mb={2}>
                Filter by:
            </Heading>
            <VStack spacing={2}>
                <Button onClick={() => handleFilter([0, 5000], [0, 10000])}>
                    Price: 0-5000, Popularity: 0-10000
                </Button>
                <Button onClick={() => handleFilter([5000, 10000], [10000, 30000])}>
                    Price: 5000-10000, Popularity: 10000-30000
                </Button>
                <Button onClick={() => handleFilter([10000, 20000], [30000, 50000])}>
                    Price: 10000-20000, Popularity: 30000-50000
                </Button>
                <Button onClick={() => handleFilter([20000, Infinity], [50000, Infinity])}>
                    Price: 20000+, Popularity: 50000+
                </Button>
            </VStack>
        </Box>
    );
};

export default Filters;
