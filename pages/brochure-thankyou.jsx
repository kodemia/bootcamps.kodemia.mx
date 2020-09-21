import Link from 'next/link'

export default function Thanyou () {
  return (
    <div className='thank-you'>
      <div className='container'>
        <section className='header'>
          <Link href='/'>
            <img
              className='logo'
              src='/images/kodemia-logo-white.png'
              alt='Logo Kodemia'
            />
          </Link>
        </section>
        <section className='content'>
          <div className='card'>
            <h1 className='title'>Gracias por</h1>
            <h1 className='title cyan-color'>registrarte</h1>

            <Link href='/brochures/JS_PRESENTIAL-D.pdf'>
              <a
                className='brochure is-desktop'
                target='__blank'
              >
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link>
            <Link href='/brochures/JS_PRESENTIAL-M.pdf'>
              <a
                className='brochure is-mobile'
                target='__blank'
              >
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
