import Link from 'next/link'

export default function Hero ({ apply, brochure, children, image, language, modality }) {
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
            <Link href={brochure}>
              <a className='brochure'>
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link>
            {/* <Link href={brochureDesktop}>
              <a className='brochure is-mobile'>
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link> */}
          </div>
        </div>
        <div className='image-section'>
          <img className='image' src={image} alt='hero' />
        </div>
      </div>
    </section>
  )
}
