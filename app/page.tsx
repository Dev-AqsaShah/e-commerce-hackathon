import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


export default function PageSections() {
  return (
    <div className="space-y-12">
      {/* Section 1: Hero Section */}
      <div className="flex flex-col items-center text-center bg-gray-50 py-4 px-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-2">Hello Nike App</h2>
        <h4 className="text-lg mb-4">
          Download the app to access everything Nike.{""}
          <span className="underline decoration-black font-semibold">Get your great</span>
        </h4>

        {/* Large Image */}
        <div className="w-full max-w-6xl my-4">
          <Image
            src="/assets/hero1.png" // Replace with the actual image path
            alt="Nike App Preview"
            width={1200} // Larger width
            height={600} // Larger height
            className="w-full rounded-lg"
          />
        </div>

     <div className="text-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
  {/* Placeholder Text */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide uppercase mb-4">
    NIKE AIR MAX
  </h1>
  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
    designed to push you past your limits and help you go to the max.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="bg-black text-white py-2 px-6 rounded-full text-sm sm:text-base">
      Notify Me
    </button>
    <button className="bg-black text-white py-2 px-6 rounded-full text-sm sm:text-base">
      Shop Air Max
    </button>
  </div>
</div>

</div>







      {/* Section 2: Placeholder */}
      <div className="bg-white py-10 px-4">
  <div className="bg-gray-200 py-10 px-4">
    {/* Top Section: Title and Buttons */}
    <div className="flex justify-between items-center mb-4">
      {/* Left Text */}
      <h2 className="text-2xl font-bold">Best of Air Max</h2>

      {/* Right Buttons */}
      <div className="flex gap-4">
        <button className="bg-gray-300 rounded-full flex items-center px-3 py-4">
          <FaAngleLeft className="text-lg" />
        </button>
        <button className="bg-gray-300 rounded-full flex items-center px-3 py-4">
          <FaAngleRight className="text-lg" />
        </button>
      </div>
    </div>

    <div className="w-full h-1 bg-black mb-6"></div>

    {/* Product Images with Descriptions */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Product 1 */}
      <div className="flex flex-col">
        {/* Product Image with bg-gray-300 */}
        <div className="w-full h-72  mb-4 flex items-center justify-center">
          <span>
            <Image src={"/assets/hero2.png"} alt="" width={300} height={130} />
          </span>
        </div>

        {/* Price and Description in Flex */}
        <div className="flex justify-between items-center ">
          <div className="text-left pl-8">
            <p className="font-semibold">Nike Air Max Pulse</p>
            <p className="text-sm text-gray-600">Women Shoes</p>
          </div>
          <p className="text-right text-lg text-gray-800 pr-8">₹ 13 995</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col">
        {/* Product Image with bg-gray-300 */}
        <div className="w-full h-72  mb-4 flex items-center justify-center">
          <span>
            <Image src={"/assets/hero3.png"} alt="" width={300} height={130} />
          </span>
        </div>

        {/* Price and Description in Flex */}
        <div className="flex justify-between items-center gap-2">
          <div className="text-left pl-8">
            <p className="font-semibold">Nike Air Max Pulse</p>
            <p className="text-sm text-gray-600">Men Shoes</p>
          </div>
          <p className="text-right text-lg text-gray-800 pr-8">₹ 13 995</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col">
        {/* Product Image with bg-gray-300 */}
        <div className="w-full h-72  mb-4 flex items-center justify-center">
          <span>
            <Image src={"/assets/hero4.png"} alt="" width={300} height={130} />
          </span>
        </div>

        {/* Price and Description in Flex */}
        <div className="flex justify-between items-center ">
          <div className="text-left pl-8">
            <p className="font-semibold">Nike Air Max 97 SE</p>
            <p className="text-sm text-gray-600">Men Shoes</p>
          </div>
          <p className="text-right text-lg text-gray-800 pr-8">₹ 16 995</p>
        </div>
      </div>
    </div>

    {/* Bottom Purple Divider Line */}
    <div className="w-full h-1 bg-black mt-6"></div>
  </div>
</div>



  

      {/* Section 3: Placeholder */}
      <div className="bg-white py-10 px-4">
  <div className=" py-10 px-4">
    {/* Section 3: Image with Text */}
    <div className="flex flex-col items-center">
      {/* Image with Text on Left */}
      <div className="relative w-full max-w-7xl mx-auto mb-6">
        <div className="absolute top-0 left-0 p-4">
          <h2 className="text-4xl font-bold text-black ">Featured</h2>
        </div>
        <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
          <Image
            src="/assets/hero5.png" // Replace with actual image path
            alt="Featured Product"
            width={1200}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Text and Button below the image */}
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-black mb-4">STEP INTO WHAT FEELS GOOD</h1>
        <h3 className="text-xl text-gray-600 mb-6">Cause Everyone Should Know The Feeling Of The Running In That Perfect Pair.</h3>
        <button className="bg-black text-white px-6 py-3 rounded-full text-xl hover:bg-gray-800 transition duration-300">
          Find Your Shoe
        </button>
      </div>
    </div>
  </div>
</div>






      {/* Section 4: Placeholder */}
 
      <div className="bg-white py-10 px-4">
  {/* Divider Line at the Top */}
  <div className="w-full h-1 bg-gray-400 mb-6"></div>

  {/* Product Grid Section */}
  <div className="bg-gray-100 py-10 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Product 1 */}
      <div className="flex flex-col items-center relative">
        <div className="w-full h-72 bg-gray-200 mb-4 flex items-center justify-center">
          <Image
            src="/assets/hero6.png" // Replace with your actual image path
            alt="Product 1"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Product Description */}
        <div className="text-left mt-4">
          <p className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</p>
          <p>Men Short-Sleeve</p>
          <p>Running Top</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">₹ 999</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col items-center relative">
        <div className="w-full h-72 bg-gray-200 mb-4 flex items-center justify-center">
          <Image
            src="/assets/hero7.png" // Replace with your actual image path
            alt="Product 2"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="text-left mt-4">
          <p className="font-semibold">Nike Dri-FIT Challenger</p>
          <p>Men 18cm(approx.)2-</p>
          <p>in-1 Versatile Shorts</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">₹ 2 495</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="flex flex-col items-center relative">
        <div className="w-full h-72 bg-gray-200 mb-4 flex items-center justify-center">
          <Image
            src="/assets/hero8.png" // Replace with your actual image path
            alt="Product 3"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="text-left mt-4">
          <p className="font-semibold">Nike Dri-FIT ADV Run Division</p>
          <p>Women Long-Sleeve</p>
          <p>Running Top</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">₹ 5 295</p>
        </div>
      </div>

      {/* Product 4 */}
      <div className="flex flex-col items-center relative">
        <div className="w-full h-72 bg-gray-200 mb-4 flex items-center justify-center">
          <Image
            src="/assets/hero9.png" // Replace with your actual image path
            alt="Product 4"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="text-left mt-4">
          <p className="font-semibold">Nike Fast</p>
          <p>Women Mid-Rise 7/8 Running</p>
          <p>Leggings with Pockets</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">₹ 3 795</p>
        </div>
      </div>
    </div>
  </div>

  {/* Divider Line at the Bottom */}
  <div className="w-full h-1 bg-gray-400 mt-6"></div>
</div>










<div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8 text-left">
  {/* Image */}
  <Image
    src="/assets/herolast.png"
    alt="Flight Essentials"
    width={5000}
    height={400}
    className="w-full max-w-4xl h-auto rounded-lg"
  />

  {/* Content Below Image */}
  <div className="text-center mt-6 max-w-2xl">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
      Flight Essentials
    </h1>
    <p className="text-sm sm:text-base lg:text-lg mt-2 text-gray-600">
      Your built-to-last all-week wears—but with style only Jordan Brand can deliver.
    </p>
    <button className="mt-4 bg-black text-white px-6 py-2 sm:py-3 rounded hover:bg-opacity-80 transition">
      Shop Now
    </button>
  </div>
</div>



<div className="relative w-full max-w-7xl mx-auto h-[420px] sm:h-[500px] lg:h-[400px] px-4 sm:px-6 lg:px-8">
  {/* Background Image */}
  <Image
    src="/assets/lasthero.png"
    alt="The Essentials"
    layout="fill"
    className="object-cover rounded-lg"
  />

  {/* Text Overlay */}
  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-md sm:top-6 sm:px-6 md:top-8 lg:top-10">
    <h1 className="text-white text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
      The Essentials
    </h1>
  </div>
</div>









     
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 pl-20">
  {/* Column 1 */}
  <div>
    <p className="mb-3 font-semibold">Icons</p>
    <p className="mb-2 text-gray-500">Air Force 1</p>
    <p className="mb-2 text-gray-500">Huarache</p>
    <p className="mb-2 text-gray-500">Air Max 90</p>
    <p className="mb-2 text-gray-500">Air Max 95</p>
  </div>

  {/* Column 2 */}
  <div>
    <p className="mb-3 font-semibold">Shoes</p>
    <p className="mb-2 text-gray-500">All Shoes</p>
    <p className="mb-2 text-gray-500">Custom Shoes</p>
    <p className="mb-2 text-gray-500">Jordan Shoes</p>
    <p className="mb-2 text-gray-500">Running</p>
  </div>

  {/* Column 3 */}
  <div>
    <p className="mb-3 font-semibold">Clothing</p>
    <p className="mb-2 text-gray-500">All Clothing</p>
    <p className="mb-2 text-gray-500">Modest Wear</p>
    <p className="mb-2 text-gray-500">Hoodies & Pullovers</p>
    <p className="mb-2 text-gray-500">Shirts & Tops</p>
  </div>

  {/* Column 4 */}
  <div>
    <p className="mb-3 font-semibold">Kids</p>
    <p className="mb-2 text-gray-500">Infant & Toddler Shoes</p>
    <p className="mb-2 text-gray-500">Kids Shoes</p>
    <p className="mb-2 text-gray-500">Kids Jordan Shoes</p>
    <p className="mb-2 text-gray-500">Kids Basketball Shoes</p>
  </div>
</div>

    </div>
  );
}
