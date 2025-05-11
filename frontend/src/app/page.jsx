export default function Home() {
  return (
    <main>
      <h1>Cybersecurity Demo</h1>
      <ul>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login (Insecure)</a></li>
        <li><a href="/login/secure">Login (Secure)</a></li>
        <li><a href="/dashboard">Dashboard (Insecure)</a></li>
        <li><a href="/dashboard/secure">Dashboard (Secure)</a></li>
        <li><a href="/comment">Comment (Insecure)</a></li>
        <li><a href="/comment/secure">Comment (Secure)</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </main>
  );
}
