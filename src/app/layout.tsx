import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import CartProvider from "./components/providers";
import ShoppingCartModal from "./components/ShoppingCartModal";
import {
  ClerkProvider,
 
} from '@clerk/nextjs'
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        <CartProvider>
<Header/>
<ShoppingCartModal/>
         
          {children}
          <Footer/>
          </CartProvider>
        </body>
      </html>

    </ClerkProvider>
  )
}
