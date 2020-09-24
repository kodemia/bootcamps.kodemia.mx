import Link from 'next/link'

import FormBrochure from './FormBrochure'

export default function RegisterBrochure ({ language, modality }) {
  return (
    <div className='register-brochure'>
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
          <div className='info-section'>
            <p className='title'>
              Conoce más del Bootcamp Full Stack con <span>{language}</span>
            </p>
            <p className='text'>
              Registrate para descargar el Brochure con la información detallada del Bootcamp
            </p>
          </div>
          <div className='form-section'>
            <FormBrochure
              language={language}
              modality={modality}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
