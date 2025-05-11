'use client';
import { useEffect, useState } from 'react';

export default function SecureDashboard() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:3001/api/secure-dashboard', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Unauthorized'));
  }, []);

  return (
    <main>
      <h2>Secure Dashboard</h2>
      <p>{message}</p>
    </main>
  );
}
