import Link from 'next/link'

import FormInterview from './FormInterview'

export default function RegisterInterview ({ language, modality }) {
  return (
    <div className='register-interview'>
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
          <div className='info-section'>
            <p className='title'>
              Gracias por solicitar una <span>entrevista</span>
            </p>
            <p className='text'>
              Te contactaremos lo más pronto posible para coordinar una entrevista personal
            </p>
          </div>
          <div className='form-section'>
            <FormInterview
              language={language}
              modality={modality}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
