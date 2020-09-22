import Link from 'next/link'

import FormApply from './FormApply'

export default function RegisterApply ({ language, modality, text, title }) {
  return (
    <div className='register-apply'>
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
            Aplica al Bootcamp Full Stack con <span>{language}</span>
            </p>
            <p className='text'>
              Te contactaremos lo más pronto posible para coordinar una entrevista personal
            </p>
          </div>
          <div className='form-section'>
            <FormApply
              language={language}
              modality={modality}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
