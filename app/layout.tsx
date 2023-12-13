import "./globals.css";
import { Inter } from "next/font/google";
import "@/public/styles/styles.scss";
import "@/public/styles/line-awesome.min.css";
import Providers from "./providers";
import AuthProvider from "@/components/provider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Letsgo - Your Way Your Trip",
  description: "Travel website system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#2D3A96"/>
      </head>
      <body
        className={`${inter.className} bg-[var(--bg-1)] text-[var(--neutral-700)]`}>
        <Providers>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
