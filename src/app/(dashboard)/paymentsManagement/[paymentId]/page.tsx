"use client";

import { useParams } from "next/navigation";

export default function PaymentDetails() {
  const { paymentId } = useParams();

  return (
    <div className="payment-details">

      <h1>Payment Details</h1>

      <div className="card">
        <p><b>ID:</b> {paymentId}</p>
        <p><b>Status:</b> Success</p>
        <p><b>Amount:</b> ₹500</p>
        <p><b>Method:</b> Razorpay</p>
      </div>

      <button className="btn-primary">
        Refund Payment
      </button>

    </div>
  );
}