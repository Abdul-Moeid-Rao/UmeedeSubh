import type { Metadata } from 'next';
import { Fraunces, Source_Sans_3, Noto_Nastaliq_Urdu } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  variable: '--font-noto-nastaliq',
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UMEED E SUBH | Official Welfare Society of UET Taxila',
  description:
    'A Struggle for Literate Pakistan. Free evening schooling (70+ children), IT Box computer lab, Chaddar stitching academy for women, and seasonal relief drives near Gate 2, UET Taxila since 2014.',
  keywords: [
    'Umeed e Subh',
    'UET Taxila',
    'Pehla Qadam School',
    'Welfare Society',
    'Child Sponsorship',
    'IT Box',
    'Chaddar School',
    'Taxila Charity',
    'Donate Pakistan',
  ],
  authors: [{ name: 'UMEED E SUBH Documentation & Media Team' }],
  openGraph: {
    title: 'UMEED E SUBH | Official Welfare Society of UET Taxila',
    description:
      '70+ children. Free. Every evening. Over 10 years of ground reality and transparent community service in Taxila.',
    type: 'website',
    locale: 'en_PK',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${sourceSans.variable} ${notoNastaliq.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('ues-theme') === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-ink antialiased selection:bg-[#FFF3D1] selection:text-ink">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
