import Link from 'next/link'
import JavascriptLifetime from '../pages/javascript-lifetime'

// const brochures = [
//   javascriptLifetime
// ]

export default function Thanyou ({ applyText, interviewText }) {
  // language == python ?
  return (
    <div className='thankyou'>
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
            <p className='text'>{applyText}</p>
            <p className='text'>{interviewText}</p>
            <Link href='/brochures/JAVASCRIPT_LIFETIME-D.pdf'>
              <a
                className='brochure is-desktop'
                target='__blank'
              >
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link>
            <Link href='/brochures/JAVASCRIPT_LIFETIME-M.pdf'>
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
