import { ReCaptchaProvider } from 'next-recaptcha-v3';
import AnimationProvider from '@/components/Animation/AnimationContext';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Libre_Franklin } from 'next/font/google';
import localfont from 'next/font/local';

const Baskerville = localfont({
  src: [
    {
      path: '../public/fonts/BaskervilleMTPro-Regular.otf',
      weight: '400',
    },
  ],
  variable: '--font-baskerville',
});

const Franklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300'], //extra-lightop
  style: ['normal'],
  variable: '--font-franklin',
});

export const metadata: Metadata = {
  title: 'Meridian Ventures',
  description: 'Bold ideas and visionary founders',
  metadataBase: new URL('https://meridianvc.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${Baskerville.variable} ${Franklin.variable}`}>
      <AnimationProvider>
        <body>
          <MaybeReCatpchaProvider>
            {children}
            <div id="modal-root"></div>
            <GoogleAnalytics gaId="G-Y3B9NBHM3E" />
          </MaybeReCatpchaProvider>
        </body>
      </AnimationProvider>
    </html>
  );
}

function MaybeReCatpchaProvider({ children }: { children: React.ReactNode }) {
  if (process.env.NEXT_PUBLIC_RECAPTCHA_ENABLED === 'true')
    return <ReCaptchaProvider useEnterprise>{children}</ReCaptchaProvider>;
  return <>{children}</>;
}
