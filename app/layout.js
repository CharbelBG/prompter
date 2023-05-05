import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prompter App',
  description: 'Save your propmts today!',
}

// we can wrap around here the header and the footer of the application as they will be rendered \ 
// on each route.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}