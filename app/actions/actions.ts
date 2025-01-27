import { product } from "@/types/products"; // Use PascalCase for the Product type

// Add a product to the cart
export const addToCart = (product: product) => {
    const cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex(item => item._id === product._id);

    if (existingProductIndex > -1) {
        // If the product already exists in the cart, increment its quantity
        cart[existingProductIndex].inventory += 1;
    } else {
        // If the product doesn't exist in the cart, add it with inventory = 1
        cart.push({
            ...product,
            inventory: 1,
        });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Remove a product from the cart
export const removeFromCart = (productId: string) => {
    let cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    cart = cart.filter(item => item._id !== productId);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
};

// Update the quantity of a product in the cart
export const updateCartQuantity = (productId: string, quantity: number) => {
    const cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = cart.findIndex(item => item._id === productId);

    if (productIndex > -1) {
        // Update the quantity of the specified product
        cart[productIndex].inventory = quantity;

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
    }
};

// Get all items from the cart
export const getItems = (): product[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
};
