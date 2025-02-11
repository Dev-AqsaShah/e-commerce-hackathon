import { NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure STRIPE_SECRET_KEY is provided
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables.");
}

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16"as any,
});

interface Item {
  productName: string;
  price: number;
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const { items }: { items: Item[] } = await req.json();

    // Validate items
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided." }, { status: 400 });
    }

    // Validate NEXT_PUBLIC_BASE_URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_BASE_URL is not set.");
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productName,
          },
          unit_amount: Math.round(item.price * 100), // Convert dollars to cents
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
