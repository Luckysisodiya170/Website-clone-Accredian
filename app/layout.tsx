import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/app/context/ModalContext";
import EnquireModal from "@/app/components/EnquireModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise — Next-Gen Learning for Your Workforce",
  description:
    "Accredian Enterprise delivers industry-aligned programs, expert-led cohorts, and real-time analytics to upskill teams at scale. Trusted by 500+ enterprises.",
  keywords: [
    "enterprise learning",
    "corporate training",
    "upskilling",
    "L&D platform",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise",
    description: "Next-Gen Expertise For Your Enterprise",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased overflow-x-hidden w-full`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)] overflow-x-hidden w-full max-w-full">
        <ModalProvider>
          {children}
          <EnquireModal />
        </ModalProvider>
      </body>
    </html>
  );
}
