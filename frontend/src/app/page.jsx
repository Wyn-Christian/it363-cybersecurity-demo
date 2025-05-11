import Link from "next/link";
export default function Home() {
  return (
    <main>
      <h1>Web Vulnerability Demo — SQLi, XSS, Broken Auth</h1>
      <p>
        This project showcases both insecure and secured versions of common web
        app security flaws.
      </p>
      <ul>
        <li>
          <Link href="/register">Register</Link>
          <span className="vuln-label vuln-insecure">
            {" "}
            ← No input validation
          </span>
        </li>
        <li>
          <Link href="/login">Login (Insecure)</Link>
          <span className="vuln-label vuln-insecure"> ← SQL Injection</span>
        </li>
        <li>
          <Link href="/login/secure">Login (Secure)</Link>
          <span className="vuln-label vuln-secure">
            {" "}
            ← Fixed with prepared statements
          </span>
        </li>
        <li>
          <Link href="/dashboard">Dashboard (Insecure)</Link>
          <span className="vuln-label vuln-insecure">
            {" "}
            ← Broken Authentication
          </span>
        </li>
        <li>
          <Link href="/dashboard/secure">Dashboard (Secure)</Link>
          <span className="vuln-label vuln-secure">
            {" "}
            ← Protected by session check
          </span>
        </li>
        <li>
          <Link href="/comment">Comment (Insecure)</Link>
          <span className="vuln-label vuln-insecure">
            {" "}
            ← Cross-Site Scripting (XSS)
          </span>
        </li>
        <li>
          <Link href="/comment/secure">Comment (Secure)</Link>
          <span className="vuln-label vuln-secure"> ← Sanitized input</span>
        </li>
        <li>
          <Link href="/logout">Logout</Link>
        </li>
      </ul>
    </main>
  );
}
