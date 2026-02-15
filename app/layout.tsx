import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { StickyCTA } from "@/components/layout/sticky-cta";
import { AdmissionChatbot } from "@/components/home/admission-chatbot";
import { ReactLenis } from '@/lib/lenis';
import { ScrollProgress } from "@/components/scroll-progress";
import { AdmissionPopup } from "@/components/admission-popup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Kumakale School & College",
  description: "Excellence in education, grounded in values.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-background min-h-screen font-sans overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <ReactLenis root>
            <div className="relative w-full overflow-x-hidden flex flex-col min-h-screen bg-[#030712] text-foreground">
              {/* Global Background Pattern */}
              <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
              </div>

              <Header />
              <ScrollProgress />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
              <BottomNav />
              <StickyCTA />
              <AdmissionChatbot />
              <AdmissionPopup />
            </div>
          </ReactLenis>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
