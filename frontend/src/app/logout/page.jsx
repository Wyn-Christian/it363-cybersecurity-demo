'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    document.cookie = 'username=; Max-Age=0; path=/;';
    router.push('/');
  }, [router]);

  return <p>Logging out...</p>;
}
