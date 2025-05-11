"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LogoutPage() {
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    const doLogout = async () => {
      await fetch("http://localhost:3001/api/logout", {
        method: "POST",
        cache: "no-store",
        credentials: "include",
      });
      setLoggedOut(true);
    };

    doLogout();
  }, []);

  return (
    <main className="secure">
      <h2>{loggedOut ? "You have been logged out." : "Logging out..."}</h2>
      {loggedOut && (
        <p className="back-link">
          <Link href="/">← Go to home</Link>
        </p>
      )}
    </main>
  );
}
