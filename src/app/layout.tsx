import './globals.css';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from '@/components/theme-provider';
import LandingNavbar from '@/components/layouts/landing/landing-navbar';
import Footer from '@/components/layouts/landing/landing-footer';
import ShopProvider from '@/context/shopContext';
import { FreeConsultation } from '@/components/ui/free-consultation';

const inter = Inter({ subsets: ['latin'] });
// const instrument = Instrument_Serif({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Curate Health',
  description:
    'Join Curate Health in transforming preventative care by integrating top specialists and innovative solutions in one accessible location. Experience healthcare redefined.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
      <link href="/layout.css" rel="stylesheet" type="text/css" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" /> */}
        <UserProvider>
          <ShopProvider>
            <body className={inter.className + ' bg-[#FEFBF9]'}>
              <main>
                <ThemeProvider
                  enableSystem
                  attribute="class"
                  storageKey="theme"
                  defaultTheme="light"
                  enableColorScheme
                >
                  <Theme>
                    {/* <FreeConsultation /> */}
                    <LandingNavbar />
                    {children}
                    <Footer />
                  </Theme>
                </ThemeProvider>
              </main>
            </body>
          </ShopProvider>
        </UserProvider>
      </html>

    </>
  );


}
