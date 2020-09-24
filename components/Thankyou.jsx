import Link from 'next/link'

export default function Thankyou ({ applyText, interviewText, language, modality }) {
  console.log('lenguaje', language)
  console.log('modalidad', modality)
  console.log('brochure route:', `/brochures/${language}${modality}.pdf`)

  return (
    <div className='thankyou'>
      <div className='container'>
        <section className='header'>
          <Link href={`/${language.toLowerCase()}-${modality.toLowerCase()}`}>
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
            <Link href={`/brochures/${language}_${modality}-D.pdf`}>
              <a
                className='brochure is-desktop'
                target='__blank'
              >
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link>
            <Link href={`/brochures/${language}_${modality}-M.pdf`}>
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
