import localFont from "next/font/local";
import { Menu } from "@/components/menu";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header/>
       <Menu/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
