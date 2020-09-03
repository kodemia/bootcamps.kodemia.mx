
export default function Introduction ({ children, text, video }) {

  return (
    <div className="introduction">
      <div className="container">
        <div className="card">
          <div className="card-container">
            <div className='info-section'>
              <div className='title'>Transforma tu vida programando</div>
              <div className='text'>
                {children}
              </div>
              <div className='subtitle'>Nos sumamos a tu objetivo y te acompañamos en el proceso de 
				transformar tu vida programando</div>
            </div>
            <div className='video-section'>
              <img className='video' src={video} alt="koder"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
