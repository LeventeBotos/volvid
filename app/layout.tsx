import { Footer } from "./Footer";
import { Header } from "./Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Volvid",
  description: "Volvid weboldal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
