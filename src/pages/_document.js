import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className=' overflow-y-auto [&::-webkit-scrollbar]:w-0 '>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}



