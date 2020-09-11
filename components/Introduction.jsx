
export default function Introduction () {
  return (
    <div className='introduction'>
      <div className='container'>
        <div className='card'>
          <div className='card-container'>
            <div className='info-section'>
              <div className='title'>transforma tu vida programando</div>
              <div className='text'>
                nuestro Bootcamp es un entrenamiento intensivo que te llevará{' '}
                <span>desde cero hasta desarrollador Full Stack</span>. Lograrás crear
                una aplicación web completa empleando{' '}
                <span>UX/UI, metodología SCRUM, FrontEnd y BackEnd con Javascript</span>
                , desplegado en la nube, creando y consumiendo servicios de terceros
              </div>
              <div className='subtitle'>
                nos sumamos a tu objetivo y te acompañamos en el proceso de transformar tu vida programando
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
    </div>
  )
}
