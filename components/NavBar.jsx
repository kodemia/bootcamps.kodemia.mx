import Link from 'next/link'

export default function NavBar () {
  return (
    <nav className='navbar'>
      <div className='container'>
        <Link href='/'>
          <img
            className='logo'
            src='/images/kodemia-logo-white.png'
            alt='Logo Kodemia'
          />
        </Link>
        <Link href='/javascript-lifetime/aplicar'>
          <a className='button'>
            Aplica
            <span>&nbsp;hoy</span>
          </a>
        </Link>
      </div>
    </nav>
  )
}
