export const fetchProducts = async () => {
    const response = await fetch(
        "https://products-f5580-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    // Convert the products object to an array
    const productsArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));

    return productsArray;
};
