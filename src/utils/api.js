export const fetchProducts = async () => {
    const response = await fetch("https://cdn.drcode.ai/interview-materials/products.json");
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data;
};
