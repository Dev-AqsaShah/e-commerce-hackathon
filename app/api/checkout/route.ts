import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs"; // Force Node.js runtime

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

interface Item {
  productName: string;
  price: number;
}

export async function POST(req: Request) {
  try {
    console.log("Incoming request to /api/checkout");

    // Ensure Stripe Secret Key is set
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is missing in environment variables.");
    }

    // Read and parse request body
    const body = await req.text();
    console.log("Raw Request Body:", body);

    const { items }: { items: Item[] } = JSON.parse(body);
    console.log("Parsed Items:", items);

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided." }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.productName,
          },
          unit_amount: item.price * 100, // Convert dollars to cents
        },
        quantity: 1,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    console.log("Stripe Checkout Session Created:", session.id);
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
