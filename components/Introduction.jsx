
export default function Introduction ({ language }) {
  return (
    <section className='introduction'>
      <div className='container'>
        <div className='card'>
          <div className='card-container'>
            <div className='info-section'>
              <div className='title'>Transforma tu vida programando</div>
              <div className='text'>
                Nuestro Bootcamp te llevará{' '}
                <span>desde cero hasta desarrollador Full Stack</span>. Crearás{' '}
                una aplicación web completa empleando{' '}
                <span>UX/UI, metodología SCRUM, FrontEnd y BackEnd con {language}</span>
                , todo desplegado en la nube
              </div>
              <div className='subtitle'>
                Nos sumamos a tu objetivo y te acompañamos en el proceso
              </div>
            </div>
            <div className='video-section'>
              <video controls poster='/images/video-testimonial.png' className='video'>
                <source
                  src='https://player.vimeo.com/external/453877636.sd.mp4?s=4f3d8db7da1f40f992196b0f3f76733274dde2d6&profile_id=165'
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
