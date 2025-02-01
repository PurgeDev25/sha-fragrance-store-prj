
import "./globals.css";

export const metadata = {
  title: "SHA Fragrances",
  description: "SHA Fragrances officiel website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
