import React from "react";
import { Box, Text, Grid, GridItem } from "@chakra-ui/react";

const ProductList = ({ products }) => {
    if (!products.length) return <Text>No products available</Text>;

    return (
        <Box>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
                {products.map((product) => (
                    <GridItem
                        key={product.id}
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        p="4"
                        cursor="pointer"
                    >
                        <Text fontSize="xl" fontWeight="bold">
                            {product.title}
                        </Text>
                        <Text>Price: {product.price}</Text>
                        <Text>Popularity: {product.popularity}</Text>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default ProductList;
