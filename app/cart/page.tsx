import Link from 'next/link'

const CartPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">

        {/* Left Section (Larger Size) */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-semibold mb-4">Bag</h2>

          {/* Cart Items */}
          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img src="/assets/hero6.png" alt="Product Image" className="w-20 h-20 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <p className="text-sm text-gray-500">Men Short-Sleeve Running Top</p>
                  <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
                  <p className="text-sm text-gray-500">Size: L</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
              </div>
              <div className="text-lg font-semibold">MRP: ₹ 3,895.00</div>
            </div>

           

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img src="/assets/hero3.png" alt="Product Image" className="w-20 h-20 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">Nike Air Max 97 SE</h3>
                  <p className="text-sm text-gray-500">Men Shoes</p>
                  <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                  <p className="text-sm text-gray-500">Size: L</p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
              </div>
              <div className="text-lg font-semibold">MRP: ₹ 16,995.00</div>
            </div>

            {/* Heart and Delete Icons (Left-aligned on small screens) */}
            
          </div>
        </div>

        {/* Right Section (Smaller Size) */}
        <div className="w-full md:w-1/3">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
            {/* Summary */}
            <div className="flex justify-between text-lg font-semibold">
              <span>Summary</span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between text-lg mt-4">
              <span>Subtotal</span>
              <span>₹ 1998</span>
            </div>

            {/* Estimated Delivery */}
            <div className="flex justify-between text-lg mt-4">
              <span>Estimated Delivery</span>
              <span>Free</span>
            </div>

            {/* Separation Line */}
            <div className="border-t border-black mt-4"></div>

            {/* Total */}
            <div className="flex justify-between text-xl font-semibold mt-4">
              <span>Total</span>
              <span>₹ 1998</span>
            </div>

            {/* Checkout Button */}
            <div className="mt-6">
              <Link href="/checkout">
                <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
                  Member Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
