"use client";

import CheckoutPage from "../components/checkoutPage";
import convertToSubcurrency from "../../../lib/convertToSubcurrency.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Home(props) {
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setAmount(props.amount);
  }, [props.amount]);

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center rounded-md bg-gradient-to-tr">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2"></h1>
        <h2 className="text-2xl">
          Bill Amount:
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubcurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
