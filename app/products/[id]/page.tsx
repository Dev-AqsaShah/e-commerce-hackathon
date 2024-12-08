import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Example products data (same as in the products page)
  const products = [
    { id: 1, name: "Nike Air Max", category: "Men's Shoes", color: "Red", price: "₹ 7,999", image: "/assets/hero1.png" },
    { id: 2, name: "Nike React Infinity", category: "Women's Shoes", color: "Blue", price: "₹ 9,499", image: "/assets/p1.png" },
    { id: 3, name: "Nike Pegasus 40", category: "Men's Shoes", color: "Green", price: "₹ 8,999", image: "/assets/p2.png" },
    { id: 4, name: "Nike Zoom Fly 5", category: "Women's Shoes", color: "Yellow", price: "₹ 10,499", image: "/assets/p3.png" },
    { id: 5, name: "Nike Revolution 6", category: "Men's Shoes", color: "Black", price: "₹ 5,499", image: "/assets/p4.png" },
    { id: 6, name: "Nike Air Zoom", category: "Women's Shoes", color: "Pink", price: "₹ 12,499", image: "/assets/p5.png" },
    { id: 7, name: "Nike Free Run 5.0", category: "Men's Shoes", color: "White", price: "₹ 6,999", image: "/assets/p6.png" },
    { id: 8, name: "Nike Court Legacy", category: "Women's Shoes", color: "Purple", price: "₹ 8,999", image: "/assets/p7.png" },
    { id: 9, name: "Nike Quest 4", category: "Men's Shoes", color: "Gray", price: "₹ 4,999", image: "/assets/p8.png" },
    { id: 10, name: "Nike Winflo 10", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", image: "/assets/p9.png" },
    { id: 11, name: "Nike Winflo 13", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", image: "/assets/p10.png" },
    { id: 12, name: "Nike Winflo 18", category: "Women's Shoes", color: "Orange", price: "₹ 7,499", image: "/assets/p11.png" },
  ];

  // Find the product by ID
  const product = products.find((prod) => prod.id === parseInt(id as string));

  // Handle case where product is not found
  if (!product) {
    return <p className="text-center mt-20 text-lg text-red-500">Product not found!</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
        <p className="text-lg text-gray-500 mb-2">Category: {product.category}</p>
        <p className="text-lg text-gray-600 mb-2">Color: {product.color}</p>
        <p className="text-lg font-semibold mb-4">MRP: {product.price}</p>
        <p className="text-gray-700">This is a detailed description of the product. Customize this text to add more details about the product.</p>
      </div>
    </div>
  );
};

export default ProductDetail;
