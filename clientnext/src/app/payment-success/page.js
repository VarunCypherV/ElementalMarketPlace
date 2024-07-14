// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
// } from "@stripe/react-stripe-js";
// import convertToSubcurrency from "../../../lib/convertToSubcurrency";




// export default function PaymentSuccess({ searchParams }) {
//   const { amount, payment_intent } = searchParams;
//   const router = useRouter();

//   console.log(payment_intent);
//   useEffect(() => {
//     // const timer = setTimeout(() => {
//     //   router.push("/trackorder");
//     // }, 300000000); // 30 seconds

//     // return () => clearTimeout(timer);
//   }, [router]);

//   const handleRedirect = () => {
//     router.push("/trackorder");
//   };

//   const orderdeets = localStorage.getItem("deets");
  
  
//   return (
//     <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-700 to-green-400">
//       <div className="mb-10">
//         <h1 className="text-4xl font-extrabold mb-2">Payment Succesful</h1>
//         <div className="bg-white p-2 rounded-md text-green-500 mt-5 text-4xl font-bold">
//           <p>Amount : </p>${amount}
//         </div>

//         <button
//           onClick={handleRedirect}
//           className="mt-5 p-2 bg-green-500 text-white rounded-md"
//         >
//           Track Order
//         </button>
//       </div>
//     </main>
//   );
// }
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function PaymentSuccess({ searchParams }) {
  const { amount, payment_intent } = searchParams;
  const router = useRouter();

  useEffect(() => {
    const orderdeets = JSON.parse(localStorage.getItem("deets"));
    console.log(orderdeets)
    if (orderdeets) {
      orderdeets.PaymentIntent = payment_intent;
      axios
        .post("http://localhost:3000/market/saveOrder", orderdeets)
        .then(response => {
          console.log("Order saved successfully", response);
          setTimeout(() => {
            router.push("/trackorder");
          }, 20000); // Redirect after 3 seconds
        })
        .catch(error => {
          console.error("Error saving order", error);
        });
    }
  }, [payment_intent, router]);

  
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-700 to-green-400">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Payment Succesful</h1>
        <div className="bg-white p-2 rounded-md text-green-500 mt-5 text-4xl font-bold">
          <p>Amount : </p>${amount}
        </div>

        <button
          onClick={() => router.push("/trackorder")}
          className="mt-5 p-2 bg-green-500 text-white rounded-md"
        >
          Track Order
        </button>
      </div>
    </main>
  );
}
