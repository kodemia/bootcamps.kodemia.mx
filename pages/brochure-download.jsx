import Link from 'next/link'

import Forms from '../components/BrochureForm'

export default function BrochureDownload () {
  return (
    <div className='brochure-download'>
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
              Conoce más del Bootcamp Full Stack con <span>Javascript</span>
            </p>
            <p className='text'>
              Te enviaremos el Brochure con la información detallada del Bootcamp
            </p>
          </div>
          <div className='form-section'>
            <Forms />
          </div>
        </section>
      </div>
    </div>
  )
}
