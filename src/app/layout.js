import { Geist, Geist_Mono,Bungee_Outline,Poppins } from "next/font/google";
import "./globals.css";
import DashboardWrapper from "@/components/DashboardWrapper";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Analytics } from "@vercel/analytics/react"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungeeOutline = Bungee_Outline({
  variable:"--font-bungee",
  weight:"400",
  subsets:['latin']
})

const poppins = Poppins({
  variable:"--font-poppins",
  weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets:['latin']
})
export const metadata = {
  title: "Streamify",
  description: "Analytics and Report for streamify app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bungeeOutline.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>
          <DashboardWrapper>
            {children}
            <Analytics/>
          </DashboardWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
