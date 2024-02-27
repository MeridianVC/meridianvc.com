import type { Metadata } from 'next'
import Head from 'next/head'
import localfont from 'next/font/local'
import { Libre_Franklin } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import AnimationProvider from '@/components/Animation/AnimationContext';


const Baskerville = localfont({
  src: [
    {
    path: '../public/fonts/BaskervilleMTPro-Regular.otf',
    weight: '400'
    }
  ],
  variable: '--font-baskerville'
})

const Franklin = Libre_Franklin({ 
  subsets: ['latin'],
  weight: ['300'], //extra-light
  style: ['normal'],
  variable: '--font-franklin'
})

export const metadata: Metadata = {
  title: 'Meridian Ventures',
  description: 'Bold ideas and visionary founders',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${Baskerville.variable} ${Franklin.variable}`}>
      <Head>
        {/* <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/meridian-dcedd.appspot.com/o/Legend.png?alt=media" />
      </Head> 
      <AnimationProvider>
        <body>
            {children}
            <div id="modal-root"></div>
            <Analytics/>
        </body>
      </AnimationProvider>

    </html>
  )
}
