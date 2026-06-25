import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Koushik S — Software Engineer & Full Stack Developer",
  description: "Portfolio of Koushik S, a Software Engineer and Full Stack Developer specializing in React, Next.js, Node.js, Firebase, and AI development.",
=======
  title: "Koushik S — AI Developer & Innovator",
  description: "Portfolio of Koushik S — AI Developer, Full Stack Engineer, and Innovator building AI-powered digital solutions.",
>>>>>>> 1ca838bdb24854d7a05a60657221b4d8bdf56e1a
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${jetbrains.variable} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-cyan-200`}>
        {children}
      </body>
    </html>
  );
}
