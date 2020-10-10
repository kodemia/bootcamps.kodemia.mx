import Link from 'next/link'

export default function Hero ({ apply, brochure, children, image, language, modality }) {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='info-section'>
          <p className='modality'>
            <span className='is-mobile'>
              Web developer{' '}|
            </span>
            <span>
              {' '}
              {modality}
            </span>
          </p>
          <h1>
            <span className='title'>Bootcamp{'\r\n'}</span>
            <span className='title'>Full Stack con{' '}</span>
            <span className='title language'>{language}</span>
          </h1>
          <p className='description'>
            {children}
          </p>
          <div className='buttons'>
            <Link href={apply}>
              <a className='apply'>Aplica al Bootcamp</a>
            </Link>
            <Link href={brochure}>
              <a className='brochure'>
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link>
          </div>
        </div>
        <div className='image-section'>
          <img className='image' src={image} alt='hero' />
        </div>
      </div>
    </section>
  )
}
