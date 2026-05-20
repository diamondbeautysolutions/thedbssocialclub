import type { Metadata, Viewport } from "next";
import "./globals.css";
import PWARegister from "@/components/pwa-register";

export const metadata: Metadata = {
  title: "The DBS Social Club",
  description: "The official membership app for The DBS Social Club.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "The DBS Social Club",
  },
  icons: {
    icon: "/dbs-social-logo.svg",
    shortcut: "/dbs-social-logo.svg",
    apple: "/dbs-social-logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#070707]">
      <body>
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
