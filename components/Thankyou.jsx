import Link from 'next/link'
import Navbar from '../components/NavBar'

export default function Thankyou ({ applyText, interviewText, language, modality }) {
  return (
    <>
      <Navbar
        language={language}
        modality={modality}
      />
      <div className='thankyou'>
        <div className='container'>
          <section className='content'>
            <div className='card'>
              <h1 className='title'>Gracias por</h1>
              <h1 className='title cyan-color'>registrarte</h1>
              <p className='text'>{applyText}</p>
              <p className='text'>{interviewText}</p>
              <Link href={`/brochures/${language}_${modality}_D.pdf`}>
                <a
                  className='brochure is-desktop'
                  target='__blank'
                >
                  <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
                </a>
              </Link>
              <Link href={`/brochures/${language}_${modality}_M.pdf`}>
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
    </>
  )
}
