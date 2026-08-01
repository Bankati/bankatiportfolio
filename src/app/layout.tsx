import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mabibè Bankati | Data Analyst & Data Scientist",
  description:
    "Portfolio de Mabibè Bankati, Data Analyst & Data Scientiste — analyse de données, tableaux de bord, SQL, Power BI, Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className={`${poppins.variable}`}>
      <body className="antialiased bg-[#f7f6f3] text-[#171522]">{children}</body>
    </html>
  );
}
