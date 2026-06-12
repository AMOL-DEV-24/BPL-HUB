"use client";

import { useRouter } from "next/navigation";

type PaymentStatus = "Success" | "Pending" | "Failed";

interface Payment {
  id: string;
  player: string;
  amount: number;
  status: PaymentStatus;
  method: string;
  date: string;
}

const payments: Payment[] = [
  {
    id: "PAY001",
    player: "Virat Kumar",
    amount: 500,
    status: "Success",
    method: "Razorpay",
    date: "2026-06-11",
  },
  {
    id: "PAY002",
    player: "Rohit Patil",
    amount: 500,
    status: "Pending",
    method: "UPI",
    date: "2026-06-10",
  },
  {
    id: "PAY003",
    player: "Shubman Singh",
    amount: 500,
    status: "Failed",
    method: "Card",
    date: "2026-06-09",
  },
];

export default function PaymentManagementPage() {
  const router = useRouter();

  return (
    <div className="pm-container">

      {/* ── HEADER ── */}
      <div className="pm-header">
        <div className="pm-header__text">
          <h1 className="pm-header__title">💳 Payment Management</h1>
          <p className="pm-header__sub">Manage all tournament payments & transactions</p>
        </div>
        <button
          className="pm-btn"
          onClick={() => router.push("/payment-management/create")}
        >
          + Add Payment
        </button>
      </div>

      {/* ── TABLE ── */}
      <div className="pm-table">

        {/* Head */}
        <div className="pm-table__head">
          <span>ID</span>
          <span>Player</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Method</span>
          <span>Date</span>
        </div>

        {/* Rows */}
        {payments.map((p) => (
          <div
            key={p.id}
            className="pm-table__row"
            onClick={() => router.push(`/payment-management/${p.id}`)}
          >
            <span className="pm-cell" data-label="ID">{p.id}</span>
            <span className="pm-cell" data-label="Player">{p.player}</span>
            <span className="pm-cell" data-label="Amount">₹{p.amount}</span>
            <span className="pm-cell" data-label="Status">
              {/* ✅ Using your built-in status-bg system */}
              <span className={`status-bg ${p.status.toLowerCase()}`}>
                {p.status}
              </span>
            </span>
            <span className="pm-cell" data-label="Method">{p.method}</span>
            <span className="pm-cell" data-label="Date">{p.date}</span>
          </div>
        ))}

      </div>
    </div>
  );
}