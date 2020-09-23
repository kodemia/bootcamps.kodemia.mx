import Link from 'next/link'
import Modules from './Modules'

export default function Program ({ brochureDesktop, brochureMobile, modules }) {
  return (
    <section className='program'>
      <div className='container'>
        <div className='subtitle'>El programa</div>
        <div className='title'>Así es como puedes llegar de cero a Full Stack</div>
        <div className='button'>
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
        <Modules modules={modules} />
      </div>
    </section>
  )
}
