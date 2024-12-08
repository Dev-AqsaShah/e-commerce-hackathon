import { FaHeart, FaTrashAlt } from 'react-icons/fa'

const CheckoutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">

        {/* Left Section (Form for Order Details) */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">How would you like to get your order?</h3>
          <p className="text-sm text-gray-600 mb-6 text-center md:text-left">Please fill in your information to proceed with the order placement.<br/>
            Customs regulation for india require a copy of the recipient's KYC.<br/> The address on the KYC needs to match the shipping address.</p>

          {/* Order Information Form */}
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-lg font-semibold">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-lg font-semibold">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Delivery Options */}
            <div>
              <label htmlFor="delivery" className="block text-lg font-semibold">Delivery Option</label>
              <select
                id="delivery"
                name="delivery"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              >
                <option value="standard">Standard Delivery</option>
                <option value="express">Express Delivery</option>
              </select>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
              Place Order
            </button>
          </form>
        </div>

        {/* Right Section (Product Details) */}
        <div className="w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Your Order</h3>

{/* Product Details */}
<div className="flex flex-col space-y-4">
  {/* Product 1 */}
  <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
    <div className="flex items-center space-x-4">
      <img src="/assets/hero6.png" alt="Product Image" className="w-20 h-20 object-cover" />
      <div>
        <h3 className="text-lg font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h3>
        <p className="text-sm text-gray-500">Men's Short-Sleeve Running Top</p>
        <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
        <p className="text-sm text-gray-500">Size: L</p>
        {/* Price and Quantity */}
        <p className="text-sm text-gray-500 mt-2">Price: ₹ 3,895.00</p>
        <p className="text-sm text-gray-500">Quantity: 1</p>
      </div>
    </div>
  </div>

  {/* Product 2 */}
  <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4">
    <div className="flex items-center space-x-4">
      <img src="/assets/hero3.png" alt="Product Image" className="w-20 h-20 object-cover" />
      <div>
        <h3 className="text-lg font-semibold">Nike Air Max 97 SE</h3>
        <p className="text-sm text-gray-500">Men's Shoes</p>
        <p className="text-sm text-gray-500">Flat Pewter/Light Bone/Black/White</p>
        <p className="text-sm text-gray-500">Size: L</p>
        {/* Price and Quantity */}
        <p className="text-sm text-gray-500 mt-2">Price: ₹ 16,995.00</p>
        <p className="text-sm text-gray-500">Quantity: 1</p>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
  )
}

export default CheckoutPage;
