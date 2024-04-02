import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['400', '600', '700'] });

export const metadata = {
  title: "Social Links Profile",
  description: "challenge from frontend mentor",
};

export default function RootLayout({ children,socials }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      {socials}
      </body>
    </html>
  );
}
