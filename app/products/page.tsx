import Link from 'next/link';

const ProductsPage = () => {
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

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <p className="text-xs text-red-500 font-bold uppercase">Just In</p>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-sm text-gray-600">Color: {product.color}</p>
              <p className="text-sm text-gray-700 font-semibold mt-2">MRP: {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
