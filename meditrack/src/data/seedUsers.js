import { doctors } from "./doctors";

export const users = [
  {
    id: "admin-001",
    username: "admin",
    password: "mockpw",
    role: "admin",
  },
  // Doctor users
  ...doctors.map((doc) => ({
    id: `user-${doc.id}`,
    username: doc.email, // or doc.email or another identifier
    password: "mockpw",
    role: "doctor",
    doctorId: doc.id,
  })),
];