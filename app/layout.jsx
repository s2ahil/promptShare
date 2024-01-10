import { Inter } from 'next/font/google'
import '@/styles/global.css'

const inter = Inter({ subsets: ['latin'] })

import Nav from "@/components/Nav"
import Provider from "@/components/Provider"




export const metadata = {
  title: 'share_prompts',
  description: 'share your ai prompts here',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
