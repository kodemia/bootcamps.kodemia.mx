import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <h1>
        Kodemia HomePage
        <Link href='js-presential'><a>JS Presencial</a></Link>
        <Link href='demo'><a>Demo</a></Link>
      </h1>
    </main>
  )
}
