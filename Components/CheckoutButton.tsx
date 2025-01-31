// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe(process.env.pk="_test_51QmtLQJLe9OOohxiWMBWwrZ3YuPjmBy6sp8yeLCn8RcmAmkjmnSFkO7NYBbISK6kfYHqzMapszjhpWJhhvGS6wUL00kpG10Kz0");

// export default function CheckoutButton({ items }: { items: { name: string; price: number; quantity: number }[] }) {
//   const handleCheckout = async () => {
//     const stripe = await stripePromise;

//     // Call the API to create the checkout session
//     const res = await fetch("/api/checkout/route.ts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ cartItems: items }),
//     });

//     const { sessionId } = await res.json();

//     // Redirect to Stripe Checkout
//     const { error } = await stripe!.redirectToCheckout({ sessionId });
//     if (error) {
//       console.error("Error during redirect: ", error);
//     }
//   };

//   return (
//     <button
//       onClick={handleCheckout}
//       className="bg-blue-500 text-white py-2 px-6 rounded-lg"
//     >
//       Checkout
//     </button>
//   );
// }



"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutButton({ items }: { items: any[] }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    const { sessionId } = await res.json();
    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId });
    setLoading(false);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
    >
      {loading ? "Processing..." : "Checkout"}
    </button>
  );
}