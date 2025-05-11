import '../globals.css';

export const metadata = {
  title: 'Cybersecurity Demo App',
  description: 'Demo app with secure and insecure routes',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
