import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kanit = Kanit({ 
  weight: ["300", "400", "500", "600"],
  subsets: ["thai", "latin"],
  variable: "--font-kanit"
});

export const metadata: Metadata = {
  title: "Theerapong Thanarodpaibun | Portfolio",
  description: "Operations Data & Automation Specialist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${kanit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}