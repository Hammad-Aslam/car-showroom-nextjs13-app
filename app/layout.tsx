import { Footer, NavBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Cars",
  description: "found the Best Car in the World!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
