"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SecureDashboard() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:3001/api/secure-dashboard", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Unauthorized"));
  }, []);

  return (
    <main className="secure">
      <h2>Secure Dashboard</h2>
      <p>{message}</p>
      <p className="back-link">
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
