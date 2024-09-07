import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Box, Select, VStack, Button, Flex } from "@chakra-ui/react";

const Filters = () => {
    const { products, setFilteredProducts } = useContext(ProductContext);
    const [selectedPriceRange, setSelectedPriceRange] = useState("");
    const [selectedPopularityRange, setSelectedPopularityRange] = useState("");

    const priceRanges = [
        { label: "All Prices", value: "" },
        { label: "0 - 5000", value: "0-5000" },
        { label: "5000 - 10000", value: "5000-10000" },
        { label: "10000 - 20000", value: "10000-20000" },
        { label: "20000+", value: "20000-Infinity" },
    ];

    const popularityRanges = [
        { label: "All Popularity", value: "" },
        { label: "0 - 10000", value: "0-10000" },
        { label: "10000 - 30000", value: "10000-30000" },
        { label: "30000 - 50000", value: "30000-50000" },
        { label: "50000+", value: "50000-Infinity" },
    ];

    const handleFilter = () => {
        let filtered = products;

        // Apply price filter
        if (selectedPriceRange) {
            const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
            filtered = filtered.filter(
                (product) =>
                    product.price >= minPrice &&
                    product.price <= (isNaN(maxPrice) ? Infinity : maxPrice)
            );
        }

        // Apply popularity filter
        if (selectedPopularityRange) {
            const [minPopularity, maxPopularity] = selectedPopularityRange.split("-").map(Number);
            filtered = filtered.filter(
                (product) =>
                    product.popularity >= minPopularity &&
                    product.popularity <= (isNaN(maxPopularity) ? Infinity : maxPopularity)
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <Box mb={4}>
            <Flex gap={2} justify={"space-between"}>
                <Flex gap={2}>
                    {/* Price Range Dropdown */}
                    <Select
                        placeholder="Select Price Range"
                        value={selectedPriceRange}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                    >
                        {priceRanges.map((range) => (
                            <option key={range.label} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </Select>

                    {/* Popularity Range Dropdown */}
                    <Select
                        placeholder="Select Popularity Range"
                        value={selectedPopularityRange}
                        onChange={(e) => setSelectedPopularityRange(e.target.value)}
                    >
                        {popularityRanges.map((range) => (
                            <option key={range.label} value={range.value}>
                                {range.label}
                            </option>
                        ))}
                    </Select>
                </Flex>
                {/* Apply Filters Button */}
                <Button onClick={handleFilter} colorScheme="blue">
                    Apply Filters
                </Button>
            </Flex>
        </Box>
    );
};

export default Filters;
