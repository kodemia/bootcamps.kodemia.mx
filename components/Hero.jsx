import Link from 'next/link'

export default function Hero ({ apply, brochureDesktop, brochureMobile, children, image, language, modality }) {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='info-section'>
          <p className='modality'>Web developer  |  {modality}</p>
          <h1 className='title margin-title'>Bootcamp</h1>
          <h1 className='title'>Full Stack con</h1>
          <h1 className='title language'>{language}</h1>
          <p className='description'>
            {children}
          </p>
          <div className='buttons'>
            <Link href={apply}>
              <a className='apply'>Aplica al Bootcamp</a>
            </Link>
            <Link href={brochureDesktop} target='__blank'>
              <a
                className='brochure is-desktop'
              >
                <img className='icon' src='/icons/download.svg' alt='download' />
              Descarga el brochure
              </a>
            </Link>
            {/* <a
              className='brochure is-mobile'
              href={brochureMobile}
              target='__blank'
            >
              <img className='icon' src='/icons/download.svg' alt='download' />
              Descarga el brochure
            </a> */}
          </div>
        </div>
        <div className='image-section'>
          <img className='image' src={image} alt='hero' />
        </div>
      </div>
    </section>
  )
}
