import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductDetails from "./ProductDetails";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

const ProductList = () => {
    const { filteredProducts, loading, error } = useContext(ProductContext);
    const [selectedProduct, setSelectedProduct] = React.useState(null);

    if (loading) return <Text>Loading products...</Text>;
    if (error) return <Text>{error}</Text>;

    return (
        <Box>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
                {filteredProducts.map((product) => (
                    <GridItem
                        key={product.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="4"
                        onClick={() => setSelectedProduct(product)}
                        cursor="pointer"
                        _hover={{ bg: "gray.100" }}
                    >
                        <Text fontSize="xl" fontWeight="bold">
                            {product.title}
                        </Text>
                        <Text>Price: {product.price}</Text>
                        <Text>Popularity: {product.popularity}</Text>
                    </GridItem>
                ))}
            </Grid>
            {selectedProduct && (
                <ProductDetails
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </Box>
    );
};

export default ProductList;
