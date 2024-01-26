import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ToasterProvider } from "@/providers/toast-provider";
import { ModalProvider } from "@/providers/modal-provider";

import type { Metadata } from "next";
import prismadb from "@/lib/prismadb";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider>
         <html lang="en">
            <ModalProvider />
            <ToasterProvider />
            <body className={inter.className}>{children}</body>
         </html>
      </ClerkProvider>
   );
}
