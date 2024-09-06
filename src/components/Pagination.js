import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Button, HStack } from "@chakra-ui/react";

const Pagination = () => {
    const { filteredProducts } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <div>
            <HStack spacing={2} mt={4} justify="center">
                {Array.from({ length: totalPages }, (_, index) => (
                    <Button key={index} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </Button>
                ))}
            </HStack>
        </div>
    );
};

export default Pagination;
