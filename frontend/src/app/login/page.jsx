"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
    if (res.ok) router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login (Insecure)</h2>
      <input
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>

      <p className="back-link">
        <Link href="/">← Back to home</Link>
      </p>
    </form>
  );
}
