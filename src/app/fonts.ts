import localFont from 'next/font/local'

export const Calibre = localFont({
  src: [
    {
      path: './fonts/Calibre/Calibre-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Calibre/Calibre-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Calibre/Calibre-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-calibre',
})

export const SFMono = localFont({
  src: [
    {
      path: './fonts/SFMono/SFMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFMono/SFMono-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-sf-mono',
})