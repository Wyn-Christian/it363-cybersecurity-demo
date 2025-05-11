export const metadata = {
  title: "Vulnerable Web App",
  description: "Cybersecurity project using Next.js and Node.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
