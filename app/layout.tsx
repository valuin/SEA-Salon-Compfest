import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Salon Website",
  description: "Where Every Visit is Heaven on Earth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-primary text-foreground">
        <main className="min-h-screen flex flex-col items-center bg-primary">
          {children}
        </main>
      </body>
    </html>
  );
}
