import Modules from './Modules'

export default function Program ({ brochureDesktop, brochureMobile, modules }) {

  return (
    <div className="program">
      <div className='container'>
        <div className='header-section'>
          <div className='subtitle'>El programa</div>
          <div className='title'>Así es como puedes llegar de cero a Full Stack</div>
          <div className='button'>
            <a 
              className='brochure is-desktop'
              href={brochureDesktop}
              target='__blank'
            >
              <img className='icon' src='/icons/download.svg' alt='download'/>
              Descarga el brochure
            </a>
            <a
              className='brochure is-mobile'
              href={brochureMobile}
              target='__blank'
            >
              <img className='icon' src='/icons/download.svg' alt='download'/>
              Descarga el brochure
            </a>
          </div>
        </div>
        <div className='modules-section'>
          <Modules modules={modules}/>
        </div>

      </div>
    </div>
  )
}
