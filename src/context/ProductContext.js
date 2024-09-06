import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../utils/api";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
                setFilteredProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        getProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{ products, filteredProducts, setFilteredProducts, error, loading }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
