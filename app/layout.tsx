import { Footer } from "./Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Volvid",
  description: "Volvid weboldal",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
