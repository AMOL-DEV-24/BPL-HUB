"use client";

import { useState } from "react";

export default function CreatePaymentPage() {
  const [player, setPlayer] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    alert("Payment created (connect backend later)");
  };

  return (
    <div className="payment-form">

      <h1>➕ Create Payment</h1>

      <input
        placeholder="Player Name"
        onChange={(e) => setPlayer(e.target.value)}
      />

      <input
        placeholder="Amount"
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Create Payment
      </button>

    </div>
  );
}