import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Cybersecurity Demo</h1>
      <ul>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login (Insecure)</Link>
        </li>
        <li>
          <Link href="/login/secure">Login (Secure)</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard (Insecure)</Link>
        </li>
        <li>
          <Link href="/dashboard/secure">Dashboard (Secure)</Link>
        </li>
        <li>
          <Link href="/comment">Comment (Insecure)</Link>
        </li>
        <li>
          <Link href="/comment/secure">Comment (Secure)</Link>
        </li>
        <li>
          <Link href="/logout">Logout</Link>
        </li>
      </ul>
    </main>
  );
}
