import Link from 'next/link'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className='footer'>
        <p>
          <Link href='/'>文字</Link>
          <Link href='/art'>圖像</Link>
        </p>
      </div>
    </>
  )
}
