import Link from 'next/link'

export default function KodeAwards ({ brochure, hasButton, name, period, text }) {
  return (
    <section className='kode-awards'>
      <div className='container'>
        <div className='card'>
          <div className='content'>
            <div className='period'>{period}</div>
            <div className=''>
              <div className='name'>{name}</div>
              <div
                className='text'
                dangerouslySetInnerHTML={{ __html: `${text}` }}
              />
            </div>
          </div>
        </div>
        {
          hasButton &&
            <Link href={brochure}>
              <a className={`brochure ${hasButton ? 'has-button' : ''}`}>
                <img className='icon' src='/icons/download.svg' alt='download' />
                Descarga el brochure
              </a>
            </Link>
        }
        {/* <Link href={brochure}>
          <a className='brochure is-mobile'>
            <img className='icon' src='/icons/download.svg' alt='download' />
              Descarga el brochure
          </a>
        </Link> */}
      </div>
    </section>
  )
}
