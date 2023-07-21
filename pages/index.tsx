import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Components
import Login from '@/components/login/login'

export default function Home() {
  return (
    <div>
      <Login />
    </div>
  )
}
