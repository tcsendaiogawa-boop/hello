import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Montserrat, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: '株式会社True Colors | AI導入支援・Claude・ChatGPT活用支援',
  description:
    '株式会社True Colorsは、Claude・ChatGPTなどの生成AIを活用し、企業ごとの課題に合わせたAI導入支援を行っています。中小企業・建設業・不動産・製造業など全国対応。まずは無料AI相談から。',
  keywords: [
    'AI導入支援',
    'Claude導入',
    'ChatGPT活用',
    'AI業務改善',
    'AIコンサルティング',
    '中小企業AI',
    'DX支援',
    'AI営業',
    'AI採用',
    'True Colors',
  ],
  openGraph: {
    title: '株式会社True Colors | AI導入支援・Claude・ChatGPT活用支援',
    description: '企業の未来を、AIでアップデートする。Claude・ChatGPTを活用したAI導入支援サービス。',
    type: 'website',
    locale: 'ja_JP',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${spaceGrotesk.variable} ${montserrat.variable} ${notoSansJP.variable}`}
    >
      <body className="font-sans bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
