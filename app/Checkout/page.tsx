"use client";

import { useRouter } from "next/navigation"; // useRouter import karo
import { product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getItems } from "../actions/actions";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FaChevronRight } from "react-icons/fa";
import Swal from "sweetalert2";


const Checkout = () => {
  const router = useRouter(); // useRouter ka instance
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );



  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) {
      // If the form is valid
      localStorage.removeItem("appliedDiscount");
      Swal.fire({
        title: "Order Placed Successfully!",
        text: "Redirecting to payment...",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      }).then(() => {
        setCartItems([]); // Clear the cart after the order is placed
        router.push("/stripe"); // Stripe page pe redirect karo
      });
    } else {
      // If the form is invalid
      Swal.fire({
        title: "Form Incomplete",
        text: "Please fill in all required fields before placing your order.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4 text-sm">
            <Link href={"/cart"} className="text-gray-600 hover:text-black">
              Cart
            </Link>
            <FaChevronRight />
            <span className="text-gray-800">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.productName}
                        width={50}
                        height={50}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.productName}</h3>
                    <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
                  </div>
                  <p>${(item.price * item.inventory).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-sm font-medium text-gray-600">No items in the cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subTotal.toFixed(2)}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${subTotal.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Information */}
          <div className="bg-white border rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold">Billing Information</h2>
            <div className="space-y-4">
              {Object.keys(formValues).map((key) => (
                <div key={key} className="space-y-1">
                  <label
                    htmlFor={key}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <input
                    type="text"
                    id={key}
                    value={(formValues as any)[key]}
                    onChange={handleInputChange}
                    placeholder={`Enter your ${key}`}
                    className={`w-full px-3 py-2 border rounded-md ${
                      formErrors[key as keyof typeof formErrors]
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {formErrors[key as keyof typeof formErrors] && (
                    <p className="text-sm text-red-500">
                      {`${key.replace(/([A-Z])/g, " $1")} is required`}
                    </p>
                  )}
                </div>
              ))}
              <button
                onClick={handlePlaceOrder}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;










// "use client";

// import { useRouter } from "next/navigation"; 
// import { product } from "@/types/products";
// import React, { useEffect, useState } from "react";
// import { getItems } from "../actions/actions";
// import Link from "next/link";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { FaChevronRight } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { client } from "@/sanity/lib/client";

// const Checkout = () => {
//   const router = useRouter(); 
//   const [cartItems, setCartItems] = useState<product[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     zipCode: "",
//     city: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     email: false,
//     phone: false,
//     address: false,
//     zipCode: false,
//     city: false,
//   });

//   useEffect(() => {
//     setCartItems(getItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subTotal = cartItems.reduce(
//     (total, item) => total + item.price * item.inventory,
//     0
//   );

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       email: !formValues.email,
//       phone: !formValues.phone,
//       address: !formValues.address,
//       zipCode: !formValues.zipCode,
//       city: !formValues.city,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handlePlaceOrder = async () => {
//     if (validateForm()) {
//       const total = subTotal - discount; // Ensure total is calculated
//       const orderData = {
//         _type: "order",
//         firstName: formValues.firstName,
//         lastName: formValues.lastName,
//         address: formValues.address,
//         city: formValues.city,
//         zipCode: formValues.zipCode,
//         phone: formValues.phone,
//         email: formValues.email,
//         cartItems: cartItems.map((item) => ({
//           _type: "reference",
//           _ref: item._id,
//         })),
//         total: total,
//         discount: discount,
//         orderDate: new Date().toISOString(), // Fixed syntax issue
//       };

//       try {
//         await client.create(orderData); 
//         console.log(orderData);
        
//         localStorage.removeItem("appliedDiscount");

//         Swal.fire({
//           title: "Order Placed Successfully!",
//           text: "Redirecting to payment...",
//           icon: "success",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#3085d6",
//         }).then(() => {
//           setCartItems([]); // Clear cart
//           router.push("/stripe"); // Redirect to payment
//         });
//       } catch (error) {
//         console.error("Error creating order:", error);
//         Swal.fire({
//           title: "Order Failed",
//           text: "Something went wrong while placing your order. Please try again.",
//           icon: "error",
//           confirmButtonText: "OK",
//           confirmButtonColor: "#d33",
//         });
//       }
//     } else {
//       Swal.fire({
//         title: "Form Incomplete",
//         text: "Please fill in all required fields before placing your order.",
//         icon: "error",
//         confirmButtonText: "OK",
//         confirmButtonColor: "#d33",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mt-6">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <nav className="flex items-center gap-2 py-4 text-sm">
//             <Link href={"/cart"} className="text-gray-600 hover:text-black">
//               Cart
//             </Link>
//             <FaChevronRight />
//             <span className="text-gray-800">Checkout</span>
//           </nav>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="bg-white border rounded-lg p-6 space-y-6">
//             <h2 className="text-lg font-semibold">Order Summary</h2>
//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div key={item._id} className="flex items-center gap-4 py-3 border-b">
//                   <div className="w-16 h-16 rounded overflow-hidden">
//                     {item.image && (
//                       <Image
//                         src={urlFor(item.image).url()}
//                         alt={item.productName}
//                         width={50}
//                         height={50}
//                         className="object-cover w-full h-full"
//                       />
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-sm font-medium">{item.productName}</h3>
//                     <p className="text-xs text-gray-500">Quantity: {item.inventory}</p>
//                   </div>
//                   <p>${(item.price * item.inventory).toFixed(2)}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-sm font-medium text-gray-600">No items in the cart</p>
//             )}
//             <div className="text-right pt-4">
//               <p className="text-sm">
//                 Subtotal: <span className="font-medium">${subTotal.toFixed(2)}</span>
//               </p>
//               <p className="text-lg font-semibold">
//                 Total: ${subTotal.toFixed(2)}
//               </p>
//             </div>
//           </div>

//           <div className="bg-white border rounded-lg p-6 space-y-6">
//             <h2 className="text-lg font-semibold">Billing Information</h2>
//             <div className="space-y-4">
//               {Object.keys(formValues).map((key) => (
//                 <div key={key} className="space-y-1">
//                   <label htmlFor={key} className="block text-sm font-medium text-gray-700">
//                     {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
//                   </label>
//                   <input
//                     type="text"
//                     id={key}
//                     value={(formValues as any)[key]}
//                     onChange={handleInputChange}
//                     placeholder={`Enter your ${key}`}
//                     className={`w-full px-3 py-2 border rounded-md ${
//                       formErrors[key as keyof typeof formErrors]
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     }`}
//                   />
//                   {formErrors[key as keyof typeof formErrors] && (
//                     <p className="text-sm text-red-500">{`${key.replace(/([A-Z])/g, " $1")} is required`}</p>
//                   )}
//                 </div>
//               ))}
//               <button
//                 onClick={handlePlaceOrder}
//                 className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
//               >
//                 Place Order
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;
