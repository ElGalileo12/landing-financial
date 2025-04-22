import "@/app/ui/globals.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Header from "@/app/components/header";

export const metadata: Metadata = {
  title: "Landing Financial",
  description: "Prueba técnica de Kevin Coronado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header /> {children}
      </body>
    </html>
  );
}
