export interface Player {
  _id: string;

  firstName: string;
  lastName: string;

  email: string;
  mobile: string;

  village: string;
  age: number;

  jerseyNumber: string;

  role: string;
  battingStyle: string;
  bowlingStyle: string;

  experience: string | null;
  about?: string;

  imageUrl: string;

  paymentStatus: string;
  paymentId: string | null;
  orderId: string | null;

  status: "pending" | "approved" | "rejected";

  createdAt: string;
  updatedAt: string;
}