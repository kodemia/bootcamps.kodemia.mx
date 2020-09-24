import Link from 'next/link'
import Modules from './Modules'

export default function Program ({ brochure, modules }) {
  return (
    <section className='program'>
      <div className='container'>
        <div className='subtitle'>El programa</div>
        <div className='title'>Así es como puedes llegar de cero a Full Stack</div>
        <div className='button'>
          <Link href={brochure}>
            <a className='brochure'>
              <img className='icon' src='/icons/download.svg' alt='download' />
              Descarga el brochure
            </a>
          </Link>
        </div>
        <Modules modules={modules} />
      </div>
    </section>
  )
}
