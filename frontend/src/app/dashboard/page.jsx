"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="insecure">
      <h2>Insecure Dashboard</h2>
      <p>This dashboard does not verify sessions.</p>
      <p className="back-link">
        <Link href="/">← Back to home</Link>
      </p>
    </main>
  );
}
