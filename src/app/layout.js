import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "@/components/DashboardWrapper";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Streamify",
  description: "Analytics and Report for streamify app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <DashboardWrapper>{children}</DashboardWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
