import { Header } from '@/components/Header/header'
import './globals.css'
import { Saira } from 'next/font/google'
import { DefaltProvaiders } from '@/Providers/defaultProviders'
import { Footer } from '@/components/Footer/footer'

const saira = Saira({ 
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap'
 })

export const metadata = {
  title: 'Capputeeno',
  description: 'Kleuton Novais - Desenvolvedor Web',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">

      <body className={saira.className}>

        <DefaltProvaiders>
        
          <Header/>
          <div style={{minHeight:'75vh'}}>
          {children}
          </div>  
          <Footer />
        </DefaltProvaiders>
      </body>
    </html>
  )
}

