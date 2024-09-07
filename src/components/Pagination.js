import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { Button, HStack, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Pagination = ({ onPageChange }) => {
    const { filteredProducts } = useContext(ProductContext);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 20;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const maxVisiblePages = 10; // Show 10 buttons at a time

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        onPageChange(pageNumber);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    // Determine the range of page buttons to display
    const getPageNumbers = () => {
        let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
        let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(endPage - maxVisiblePages + 1, 1);
        }

        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <HStack spacing={2} mt={4} justify="center">
            {/* Previous Button */}
            <IconButton
                icon={<ArrowLeftIcon />}
                onClick={prevPage}
                disabled={currentPage === 1}
                aria-label="Previous page"
            />

            {/* First page and ellipsis */}
            {pageNumbers[0] > 1 && (
                <>
                    <Button onClick={() => handlePageChange(1)}>1</Button>
                    {pageNumbers[0] > 2 && <Button disabled>...</Button>}
                </>
            )}

            {/* Visible page numbers */}
            {pageNumbers.map((pageNumber) => (
                <Button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    colorScheme={pageNumber === currentPage ? "blue" : "gray"}
                >
                    {pageNumber}
                </Button>
            ))}

            {/* Last page and ellipsis */}
            {pageNumbers[pageNumbers.length - 1] < totalPages && (
                <>
                    {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                        <Button disabled>...</Button>
                    )}
                    <Button onClick={() => handlePageChange(totalPages)}>{totalPages}</Button>
                </>
            )}

            {/* Next Button */}
            <IconButton
                icon={<ArrowRightIcon />}
                onClick={nextPage}
                disabled={currentPage === totalPages}
                aria-label="Next page"
            />
        </HStack>
    );
};

export default Pagination;
