import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dự án 3",
  description: "Trang web tuyển dụng việc làm IT tại Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
